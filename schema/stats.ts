export type PresidentInfo = {
  name: string;
  party: string;
  term: string;
  money: number;
  age: number;
};

export type GameData = {
  date: string;
  day: number;
};

export type CountryInfo = {
  name: string;
  population: number;
  area: number;
  capital: string;
  currency: string;
};

export type InternationalSupport = {
  global: number;
  eastern: number;
  western: number;
  middleEast: number;
  unitedNations: number;
  europeanUnion: number;
  SAARC: number;
  OIC: number;
  ASEAN: number;
  IMF: number;
};

export type Parliament = {
  communist: number;
  democratic: number;
  green: number;
  islamist: number;
  nationalist: number;
  republican: number;
  overall: number;
};

export type Support = {
  citizens: {
    conservative: number;
    liberal: number;
  };
  military: {
    army: number;
    navy: number;
    airForce: number;
  };
  parliament: Parliament;
  international: InternationalSupport;
};

export type Moral = {
  humanRights: number;
  environment: number;
  security: number;
  stability: number;
  happiness: number;
  crime: number;
  education: number;
  healthcare: number;
  economy: number;
  infrastructure: number;
  technology: number;
  religion: number;
  approval: number;
  corruption: number;
};

export type Tax = {
  incomeTax: number;
  corporateTax: number;
  salesTax: number;
  propertyTax: number;
  importTax: number;
  exportTax: number;
};

export type Finance = {
  treasury: number;
  income: number;
  expense: number;
  debt: number;
  tax: Tax;
};

type Stats = {
  presidentInfo: PresidentInfo;
  gameData: GameData;
  countryInfo: CountryInfo;
  support: Support;
  moral: Moral;
  finance: Finance;
};

export default Stats;
