"use client";

import { getStats } from "@/lib/getStats";
import { Parliament } from "@/data/parliamentData";
import Stats from "@/schema/stats";
import { createStore } from "zustand/vanilla";
import { useStore } from "zustand";
import Dexie from "dexie";

class AppDatabase extends Dexie {
  stats!: Dexie.Table<Stats, number>;
  parliament!: Dexie.Table<Parliament, number>;

  constructor() {
    super("AppDatabase");
    this.version(1).stores({
      stats: "++id",
      parliament: "++id",
    });
  }
}

const db = typeof window !== "undefined" ? new AppDatabase() : null;

const defaultStats = getStats("normal");

interface StatsStore {
  stats: Stats;
  parliament: Parliament;
  setStats: (stats: Stats) => Promise<void>;
  setParliament: (parliament: Parliament) => Promise<void>;
  loadFromDexie: () => Promise<void>;
  restartGame: () => void;
}

const useStatsStore = createStore<StatsStore>((set) => ({
  stats: defaultStats,
  parliament: {} as Parliament,

  setStats: async (stats: Stats) => {
    set({ stats });
    if (db) {
      await db.stats.clear();
      await db.stats.add(stats);
    }
  },
  setParliament: async (parliament: Parliament) => {
    set({ parliament });
    if (db) {
      await db.parliament.clear();
      await db.parliament.add(parliament);
    }
  },

  loadFromDexie: async () => {
    if (db) {
      const stats = (await db.stats.toArray())[0] || defaultStats;
      const parliament = (await db.parliament.toArray())[0] || {};
      set({ stats, parliament });
    } else {
      set({ stats: defaultStats, parliament: {} as Parliament });
    }
  },

  restartGame: () => {
    set({ stats: defaultStats, parliament: {} as Parliament });
    if (db) {
      db.stats.clear();
      db.parliament.clear();
    }
  },
}));

const useStats = () => useStore(useStatsStore);

await useStatsStore.getState().loadFromDexie();

export default useStats;
export const statsStore = useStatsStore;
export { db };
