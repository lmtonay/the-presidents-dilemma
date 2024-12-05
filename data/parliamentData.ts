import { randArrEl } from "@/lib/utils";
import { getCitizensData } from "./citizensDb";
import { PARLIAMENT_AGE_RANGE, PARLIAMENT_MEMBERS } from "./constants";
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
    count: PARLIAMENT_MEMBERS,
    region: continent,
    ageRange: PARLIAMENT_AGE_RANGE as [number, number],
  });

  elects.forEach((e) => {
    let memberRandomParty: PartyType;
    let memberRandomPartyName: string;

    if (Math.random() < 0.4) {
      memberRandomParty = party;
      memberRandomPartyName = partyName;
    } else {
      const randomPartyKey = randArrEl(parties) as keyof typeof politicalParties;
      memberRandomParty = randomPartyKey;
      memberRandomPartyName = country + " " + randArrEl(politicalParties[randomPartyKey]);
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

  parliament.pm = randArrEl(ownPartyMps);
  parliament.speaker =
    randArrEl(ownPartyMps.filter((m) => m.id !== parliament.pm.id)) || parliament.pm;

  parliament.leadingParty.name = partyName;
  parliament.leadingParty.type = party;

  const partyCounts: { [key: string]: number } = {};

  parliament.members.forEach((member) => {
    if (!partyCounts[member.partyName]) {
      partyCounts[member.partyName] = 1;
    }
    partyCounts[member.partyName]++;
  });

  const sortedParties = Object.keys(partyCounts).sort(
    (a, b) => partyCounts[b] - partyCounts[a]
  );

  const oppositionParty = sortedParties[1] as keyof typeof politicalParties;

  parliament.mainOpposition.name = oppositionParty;
  parliament.mainOpposition.type = parliament.members.find(
    (m) => m.partyName === oppositionParty
  )?.party || "";

  statsStore.getState().setParliament(parliament);
};
