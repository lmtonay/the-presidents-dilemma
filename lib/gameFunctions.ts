"use client";

import { generateFirstParliament } from "@/data/parliamentData";
import { getStats } from "@/lib/getStats";
import { Event } from "@/schema/events";
import { Continent, PartyType } from "@/schema/stats";
import { eventsStore } from "@/store/events-store";
import { statsStore } from "@/store/stats-store";
import { applyInfluence } from "./utils";

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
  const setEvents = eventsStore.getState().setEvents;

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

  // Update Zustand store with the new events
  setEvents([
    {
      date: defaultStats.gameData.date,
      day: defaultStats.gameData.day,
      events: [
        {
          action: "start",
          title: "Game Started",
          description: "Welcome to your new country!",
          influence: {},
          type: "game",
        },
      ],
    },
  ]);

  // Simulate the first-time election
  generateFirstParliament(data.continent, data.partyType, data.partyName, data.countryName);
};

export const executeAction = (event: Event) => {
  const events = eventsStore.getState().events;
  const stats = statsStore.getState().stats;

  const updatedStats = applyInfluence(stats, event.influence);

  statsStore.getState().setStats(updatedStats);

  // add the event to the list of events in the same date as stats?.gameData?.date

  const updatedEvents = events.map((e) => {
    if (e.date === stats?.gameData?.date) {
      return {
        ...e,
        events: [...e.events, event],
      };
    }
    return e;
  });

  // Update Zustand store with the new events
  eventsStore.getState().setEvents(updatedEvents);
};
