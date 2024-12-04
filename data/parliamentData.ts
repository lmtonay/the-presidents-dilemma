import PoliticalParty from "./politicalParties";
import { getCitizensData } from "./citizensDb";
import politicalParties from "./politicalParties";
import { Continent, PartyType } from "@/schema/stats";
import useStatsStore from "@/store/stats-store";

export type MP = {
  id: string;
  name: string;
  party: string;
  age: number;
  partyName: string;
};

export type Parliament = {
  nth: number;
  term: string;
  members: MP[];
  pm: MP;
  speaker: MP;
  leadingParty: {
    name: string;
    type: string;
  };
  mainOpposition: {
    name: string;
    type: string;
  };
};

export const simulateFirstTimeElection = (
  continent: Continent,
  party: PartyType,
  partyName: string
) => {
  // randomly pick 50 MPs, then fill the parliament type and store in localstorage

  const parliament: Parliament = {
    nth: 1,
    term: "2021-2025",
    members: [],
    pm: {
      id: "1",
      name: "",
      party: "",
      age: 50,
      partyName: "",
    },
    speaker: {
      id: "2",
      name: "",
      party: "",
      age: 45,
      partyName: "",
    },
    leadingParty: {
      name: "",
      type: "",
    },
    mainOpposition: {
      name: "",
      type: "",
    },
  };

  const elects = getCitizensData({
    count: 50,
    region: continent,
    ageRange: [30, 70],
  });

  const partyList = Object.values(PoliticalParty).flat();

  elects.forEach((e) => {
    let randomParty: keyof typeof politicalParties;
    let randomPartyName: string;
    if (Math.random() < 0.5) {
      randomParty = party;
      randomPartyName = partyName;
    } else {
      randomParty = partyList[
        Math.floor(Math.random() * partyList.length)
      ] as keyof typeof politicalParties;
      randomPartyName =
        politicalParties[randomParty][
          Math.floor(Math.random() * politicalParties[randomParty].length)
        ];
    }
    parliament.members.push({
      id: e.id,
      name: e.name,
      party: randomParty,
      age: e.age,
      partyName: randomPartyName,
    });
  });

  parliament.members.sort((a, b) => a.party.localeCompare(b.party));

  // pm must be from the party in parameter
  const ownPartyMps = parliament.members.filter((m) => m.partyName === party);
  parliament.pm = ownPartyMps[Math.floor(Math.random() * ownPartyMps.length)];
  parliament.speaker =
    ownPartyMps[Math.floor(Math.random() * ownPartyMps.length)];

  // leading party must be the party in parameter
  parliament.leadingParty.name = partyName;
  parliament.leadingParty.type = party;

  // randomly assign main opposition
  const parties = Object.keys(politicalParties);
  const randomParty = parties[
    Math.floor(Math.random() * parties.length)
  ] as keyof typeof politicalParties;
  parliament.mainOpposition.name =
    politicalParties[randomParty][
      Math.floor(Math.random() * politicalParties[randomParty].length)
    ];
  parliament.mainOpposition.type = randomParty;

  useStatsStore.getState().setParliament(parliament);
};
