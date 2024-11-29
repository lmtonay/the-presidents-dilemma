"use client";

import { StatsContext } from "@/contexts/StatsContext";
import React, { useContext } from "react";
import BasicInfo from "./BasicInfo";
import Supports from "./Supports";
import Morals from "./Morals";
import Finances from "./Finances";

const Stats: React.FC = () => {
  const { stats } = useContext(StatsContext);

  return (
    <div className="p-3">
      <h1 className="text-2xl bg-red-500 text-white rounded py-1 font-bold text-center">
        Statistics
      </h1>
      <BasicInfo
        country={stats?.countryInfo}
      />
      <Supports data={stats?.support} />
      <Morals data={stats?.moral} />
      <Finances data={stats?.finance} />
    </div>
  );
};

export default Stats;
