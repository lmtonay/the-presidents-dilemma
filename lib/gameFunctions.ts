import { simulateFirstTimeElection } from "@/data/parliamentData";
import { getStats } from "@/lib/getStats";
import { Continent, PartyType } from "@/schema/stats";
import { statsStore } from "@/store/stats-store";

type InitialGameData = {
  difficulty: string;
  continent: Continent;
  countryName: string;
  capitalCity: string;
  presidentName: string;
  presidentAge: number;
  currency: string;
  language: string;
  partyType: PartyType;
  partyName: string;
};

export const startGame = async (data: InitialGameData) => {
  const setStats = statsStore.getState().setStats;

  const defaultStats = getStats(data.difficulty, {
    continent: data.continent,
    country: data.countryName,
    capital: data.capitalCity,
    president: data.presidentName,
    presidentAge: data.presidentAge,
    currency: data.currency,
    language: data.language,
    partyName: data.partyName,
    partyType: data.partyType,
  });

  defaultStats.gameData.new = false;

  // Update Zustand store with the new stats
  setStats(defaultStats);

  // Simulate the first-time election
  // simulateFirstTimeElection(data.continent, data.partyType, data.partyName);

  // Reload the page
  console.log(defaultStats);
};
