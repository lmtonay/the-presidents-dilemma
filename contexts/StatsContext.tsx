"use client";

import { getStats } from "@/lib/getStats";
import Stats from "@/schema/stats";
import React, { createContext, useState, useEffect } from "react";

const defaultStats = getStats("normal");

const StatsContext = createContext<{
  stats: Stats;
  setStats: React.Dispatch<React.SetStateAction<Stats>>;
}>({
  stats: defaultStats,
  setStats: () => {},
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


  useEffect(() => {
    if (typeof window !== "undefined" && !stats.gameData.new) {
      localStorage.setItem("stats", JSON.stringify(stats));
    }
  }, [stats]);

  return (
    <StatsContext.Provider value={{ stats, setStats }}>
      {children}
    </StatsContext.Provider>
  );
};
export { StatsContext, StatsProvider };
