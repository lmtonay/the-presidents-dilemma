import { getStats } from "@/lib/getStats";

type InitialGameData = {
  difficulty: string;
  continent: string;
  countryName: string;
  capitalCity: string;
  presidentName: string;
  presidentAge: number;
  currency: string;
  language: string;
  partyType: string;
  partyName: string;
};

export const startGame = (data: InitialGameData) => {
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

  localStorage.setItem("stats", JSON.stringify(defaultStats));

  window.location.reload();
};
