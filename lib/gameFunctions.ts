"use client";

import { generateFirstParliament } from "@/data/parliamentData";
import { getStats } from "@/lib/getStats";
import { Event } from "@/schema/events";
import { Continent, PartyType } from "@/schema/stats";
import { eventsStore } from "@/store/events-store";
import { statsStore } from "@/store/stats-store";
import { applyInfluence } from "./utils";
import { actionsStore } from "@/store/actions-store";

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

  setStats(defaultStats);

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

  generateFirstParliament(data.continent, data.partyType, data.partyName, data.countryName);
};

export const executeAction = (event: Event) => {
  const events = eventsStore.getState().events;
  const stats = statsStore.getState().stats;
  const refreshActions = actionsStore.getState().refreshActions;

  const updatedStats = applyInfluence(stats, event.influence);

  statsStore.getState().setStats(updatedStats);


  const updatedEvents = events.map((e) => {
    if (e.date === stats?.gameData?.date) {
      return {
        ...e,
        events: [...e.events, event],
      };
    }
    return e;
  });

  eventsStore.getState().setEvents(updatedEvents);

  refreshActions();
};
