"use client";

import React from "react";
import BasicInfo from "./BasicInfo";
import Supports from "./Supports";
import Morales from "./Morales";
import Finances from "./Finances";
import useStats from "@/store/stats-store";

const Stats: React.FC = () => {
  const { stats } = useStats();

  return (
    <div className="p-3">
      <h1 className="text-2xl bg-red-500 text-white rounded py-1 font-bold text-center">
        Statistics
      </h1>
      <BasicInfo
        country={stats?.countryInfo}
      />
      <Supports data={stats?.support} />
      <Morales data={stats?.morale} />
      <Finances data={stats?.finance} />
    </div>
  );
};

export default Stats;
