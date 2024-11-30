import countriesWithDetails from "@/data/countriesWithDetails";
import defaultStats from "@/data/defaultStats";
import politicalParties, { PoliticalParty } from "@/data/politicalParties";
import Stats from "@/schema/stats";
import { Parliament } from "@/schema/stats";

export const getStats = (
  difficulty: string,
  options?: {
    president?: string;
    partyName?: string;
    country?: string;
    capital?: string;
    presidentAge?: number;
    partyType?: string;
    continent?: string;
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
  const randomCountry =
    countryKeys[Math.floor(Math.random() * countryKeys.length)];
  const randomCountryData = countriesWithDetails[randomCountry];
  statsToReturn.countryInfo.name = country || randomCountry;
  statsToReturn.countryInfo.capital = capital || randomCountryData.capital;
  statsToReturn.presidentInfo.name = president || randomCountryData.president;
  statsToReturn.countryInfo.continent =
    continent || randomCountryData.continent;
  statsToReturn.countryInfo.language = language || randomCountryData.language;
  statsToReturn.countryInfo.currency = currency || randomCountryData.currency;

  const partyKeys = Object.keys(politicalParties);
  const randomPartyType = partyKeys[
    Math.floor(Math.random() * partyKeys.length)
  ] as keyof PoliticalParty;
  const randomPartyName =
    politicalParties[randomPartyType][
      Math.floor(Math.random() * politicalParties[randomPartyType].length)
    ];

  statsToReturn.presidentInfo.party = partyType || randomPartyType;
  statsToReturn.presidentInfo.partyName = partyName
    ? partyName
    : `${country || randomCountry} ${randomPartyName}`;

  statsToReturn.support.parliament[
    (partyType as keyof Parliament) || (randomPartyType as keyof Parliament)
  ] = 90;

  statsToReturn.presidentInfo.age =
    presidentAge || Math.floor(Math.random() * 45) + 35;

  return statsToReturn;
};
