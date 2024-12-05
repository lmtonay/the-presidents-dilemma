import { PartyType } from "@/schema/stats";

export type PoliticalParty = {
  [key in PartyType]: string[];
};

const politicalParties: PoliticalParty = {
  nationalist: [
    "Vanguard",
    "Patriotic Front",
    "Sovereignty Movement",
    "Nationalist Alliance",
    "Homeland Guardians",
  ],
  islamist: [
    "Unity Movement",
    "Shariah Party",
    "Brotherhood",
    "FJ Coalition",
    "Caliphate Party",
  ],
  democratic: [
    "Progress Party",
    "United Democratic Front",
    "Liberal Movement",
    "People's Alliance",
    "Freedom and Reform Party",
  ],
  communist: [
    "Liberation Front",
    "Workers' Party",
    "Red Banner Movement",
    "Socialist Unity Party",
    "Communist Vanguard",
  ],
  green: [
    "Future Party",
    "Environmental Movement",
    "Eco-Alliance",
    "Sustainable Progress Party",
    "Green Horizon Movement",
  ],
  republican: [
    "Alliance",
    "Conservative Unity Party",
    "Traditionalist Front",
    "Patriot's Coalition",
    "Liberty Party",
  ],
};

export default politicalParties;