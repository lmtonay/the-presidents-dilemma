"use client";

import { createStore } from "zustand/vanilla";
import { useStore } from "zustand";
import Dexie from "dexie";
import { Events } from "@/schema/events";

class AppDatabase extends Dexie {
  events!: Dexie.Table<Events[], number>;

  constructor() {
    super("AppDatabase");
    this.version(1).stores({
      events: "++id",
    });
  }
}

const db = typeof window !== "undefined" ? new AppDatabase() : null;

interface EventsStore {
  events: Events[];
  setEvents: (events: Events[]) => Promise<void>;
  loadFromDexie: () => Promise<void>;
  restartGame: () => void;
}

const useEventsStore = createStore<EventsStore>((set) => ({
  events: [],
  setEvents: async (events: Events[]) => {
    set({ events });
    if (db) {
      await db.events.clear();
      await db.events.add(events);
    }
  },

  loadFromDexie: async () => {
    if (db) {
      const events = (await db.events.toArray())[0];
      if (events) {
        set({ events });
      } else {
        set({ events: [] });
      }
    } else {
      set({ events: [] });
    }
  },

  restartGame: () => {
    set({ events: [] });
    if (db) {
      db.events.clear();
    }
  },
}));

const useEvents = () => useStore(useEventsStore);

await useEventsStore.getState().loadFromDexie();

export default useEvents;
export const eventsStore = useEventsStore;
export { db };
