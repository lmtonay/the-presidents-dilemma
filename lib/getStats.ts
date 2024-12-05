"use client";

import { getAName } from "@/data/citizensDb";
import countriesWithDetails from "@/data/countriesWithDetails";
import defaultStats from "@/data/defaultStats";
import politicalParties, { PoliticalParty } from "@/data/politicalParties";
import Stats, { Continent } from "@/schema/stats";
import { ParliamentSupport } from "@/schema/stats";
import { randArrEl, randInt } from "./utils";
import { INITIAL_OWN_PARTY_SUPPORT, PRESIDENT_AGE_RANGE } from "@/data/constants";

export const getStats = (
  difficulty: string,
  options?: {
    president?: string;
    partyName?: string;
    country?: string;
    capital?: string;
    presidentAge?: number;
    partyType?: string;
    continent?: Continent;
    language?: string;
    currency?: string;
  }
): Stats => {
  const {
    president,
    partyName,
    country,
    capital,
    presidentAge,
    partyType,
    continent,
    language,
    currency,
  } = options || {};
  let statsToReturn: Stats;

  //! Uncomment this block to enable difficulty levels
  // switch (difficulty) {
  //   case "easy":
  //     statsToReturn = easyStats;
  //     break;
  //   case "tough":
  //     statsToReturn = toughStats;
  //     break;
  //   default:
  //     statsToReturn = defaultStats;
  // }

  // eslint-disable-next-line prefer-const
  statsToReturn = defaultStats;

  // pick a random country, president and capital and assign them to the stats
  const countryKeys = Object.keys(countriesWithDetails);
  const randomCountry = randArrEl(countryKeys);
  const randomCountryData = countriesWithDetails[randomCountry];
  statsToReturn.countryInfo.name = country || randomCountry;
  statsToReturn.countryInfo.capital = capital || randomCountryData.capital;
  // statsToReturn.presidentInfo.name = president || randomCountryData.president;
  statsToReturn.countryInfo.continent =
    continent || randomCountryData.continent;
  statsToReturn.countryInfo.language = language || randomCountryData.language;
  statsToReturn.countryInfo.currency = currency || randomCountryData.currency;
  statsToReturn.presidentInfo.name =
    president || getAName(statsToReturn.countryInfo.continent as Continent);

  const partyKeys = Object.keys(politicalParties);
  const randomPartyType = randArrEl(partyKeys) as keyof PoliticalParty;
  const randomPartyName = randArrEl(politicalParties[randomPartyType]);

  statsToReturn.presidentInfo.party = partyType || randomPartyType;
  statsToReturn.presidentInfo.partyName = partyName
    ? partyName
    : `${country || randomCountry} ${randomPartyName}`;

  if (!statsToReturn.support.parliament) {
    statsToReturn.support.parliament = {} as ParliamentSupport;
  }
  statsToReturn.support.parliament[
    (partyType as keyof ParliamentSupport) ||
      (randomPartyType as keyof ParliamentSupport)
  ] = INITIAL_OWN_PARTY_SUPPORT;

  statsToReturn.presidentInfo.age =
    presidentAge || randInt({ arr: PRESIDENT_AGE_RANGE });

  return statsToReturn;
};
