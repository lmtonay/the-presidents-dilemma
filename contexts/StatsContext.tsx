"use client";

import { Parliament } from "@/data/parliamentData";
import { getStats } from "@/lib/getStats";
import Stats from "@/schema/stats";
import React, { createContext, useState, useEffect } from "react";

const defaultStats = getStats("normal");

const StatsContext = createContext<{
  stats: Stats;
  setStats: React.Dispatch<React.SetStateAction<Stats>>;
  parliament: Parliament;
  setParliament: React.Dispatch<React.SetStateAction<Parliament>>;
}>({
  stats: defaultStats,
  setStats: () => {},
  parliament: {} as Parliament,
  setParliament: () => {},
});

const StatsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [stats, setStats] = useState(() => {
    // Load initial state from localStorage
    const savedStats =
      typeof window !== "undefined" ? localStorage.getItem("stats") : null;

    return savedStats ? JSON.parse(savedStats) : defaultStats;
  });

  const [parliament, setParliament] = useState(() => {
    // Load initial state from localStorage
    const savedParliament =
      typeof window !== "undefined" ? localStorage.getItem("parliament") : null;

    return savedParliament ? JSON.parse(savedParliament) : {};
  });

  useEffect(() => {
    if (typeof window !== "undefined" && !stats.gameData.new) {
      localStorage.setItem("stats", JSON.stringify(stats));
      localStorage.setItem("parliament", JSON.stringify(parliament));
    }
  }, [stats, parliament]);

  return (
    <StatsContext.Provider
      value={{ stats, setStats, parliament, setParliament }}
    >
      {children}
    </StatsContext.Provider>
  );
};
export { StatsContext, StatsProvider };
