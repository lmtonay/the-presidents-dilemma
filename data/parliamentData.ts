import { getCitizensData } from "./citizensDb";
import politicalParties from "./politicalParties";
import { Continent, parties, PartyType } from "@/schema/stats";
import { statsStore } from "@/store/stats-store";

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

export const generateFirstParliament = (
  continent: Continent,
  party: PartyType,
  partyName: string,
  country: string
) => {
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

  elects.forEach((e) => {
    let memberRandomParty: PartyType;
    let memberRandomPartyName: string;

    if (Math.random() < 0.5) {
      memberRandomParty = party;
      memberRandomPartyName = partyName;
    } else {
      const randomPartyKey = parties[Math.floor(Math.random() * parties.length)] as keyof typeof politicalParties;
      memberRandomParty = randomPartyKey;
      memberRandomPartyName = country + " " + politicalParties[randomPartyKey][Math.floor(Math.random() * politicalParties[randomPartyKey].length)];
    }

    parliament.members.push({
      id: e.id,
      name: e.name,
      party: memberRandomParty,
      age: e.age,
      partyName: memberRandomPartyName,
    });
  });

  parliament.members.sort((a, b) => a.party.localeCompare(b.party));

  const ownPartyMps = parliament.members.filter(
    (m) => m.partyName === partyName
  );

  parliament.pm = ownPartyMps[Math.floor(Math.random() * ownPartyMps.length)];
  parliament.speaker =
    ownPartyMps[Math.floor(Math.random() * ownPartyMps.length)];

  parliament.leadingParty.name = partyName;
  parliament.leadingParty.type = party;

  const oppositionParty = parties[
    Math.floor(Math.random() * parties.length)
  ] as keyof typeof politicalParties;
  parliament.mainOpposition.name =
    politicalParties[oppositionParty][
      Math.floor(Math.random() * politicalParties[oppositionParty].length)
    ];
  parliament.mainOpposition.type = oppositionParty;

  statsStore.getState().setParliament(parliament);
};
