"use client";

export type PresidentInfo = {
  name: string;
  party: string;
  partyName: string;
  term: string;
  money: number;
  age: number;
};

export type Continent = "Asia" | "Europe" | "South America" | "Africa" | "North America" | "Oceania";
export type PartyType = "nationalist" | "islamist" | "democratic" | "green" | "republican" | "communist";
export const parties : PartyType[] = ["nationalist", "islamist", "democratic", "green", "republican"];

export type GameData = {
  date: string;
  day: number;
  new: boolean;
  difficulty: string;
};

export type CountryInfo = {
  name: string;
  population: number;
  area: number;
  capital: string;
  currency: string;
  continent: string;
  language: string;
  emergency?: {
    active: boolean;
    reason: string;
    from: string;
  }
};

export type InternationalSupport = {
  global?: number;
  eastern?: number;
  western?: number;
  middleEast?: number;
  unitedNations?: number;
  europeanUnion?: number;
  SAARC?: number;
  OIC?: number;
  ASEAN?: number;
  IMF?: number;
};

export type ParliamentSupport = {
  communist?: number;
  democratic?: number;
  green?: number;
  islamist?: number;
  nationalist?: number;
  republican?: number;
};

export type JudiciarySupport = {
  supremeCourt?: number;
  highCourt?: number;
};

export type Support = {
  citizens?: {
    conservative?: number;
    liberal?: number;
  };
  military?: {
    army?: number;
    navy?: number;
    airForce?: number;
  };
  parliament?: ParliamentSupport;
  judiciary?: JudiciarySupport;
  international?: InternationalSupport;
};

export type Morale = {
  humanRights?: number;
  environment?: number;
  security?: number;
  stability?: number;
  happiness?: number;
  crime?: number;
  education?: number;
  healthcare?: number;
  economy?: number;
  infrastructure?: number;
  technology?: number;
  religion?: number;
  approval?: number;
  corruption?: number;
  tourism?: number;
  culture?: number;
};

export type Tax = {
  incomeTax?: number;
  corporateTax?: number;
  salesTax?: number;
  propertyTax?: number;
  importTax?: number;
  exportTax?: number;
};

export type Finance = {
  treasury?: number;
  income?: number;
  expense?: number;
  debt?: number;
  tax?: Tax;
};

type Stats = {
  presidentInfo: PresidentInfo;
  gameData: GameData;
  countryInfo: CountryInfo;
  support: Support;
  morale: Morale;
  finance: Finance;
};

export default Stats;
