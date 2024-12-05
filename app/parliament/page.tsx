"use client";

import useStats from "@/store/stats-store";
import React from "react";

const ParliamentPage: React.FC = () => {
  const { parliament, stats } = useStats();

  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold text-center">
        The Parliament of {stats?.countryInfo?.name}
      </h1>
    </div>
  );
};

export default ParliamentPage;
