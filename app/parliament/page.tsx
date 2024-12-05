"use client";

import IconButton from "@/components/IconButton";
import { Separator } from "@/components/ui/separator";
import parliamentButtons from "@/data/parliamentButtons";
import { capitalize, getOrdinal } from "@/lib/utils";
import useStats from "@/store/stats-store";
import React from "react";

const ParliamentPage: React.FC = () => {
  const { parliament, stats } = useStats();

  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold text-center">
        The Parliament of {stats?.countryInfo?.name}
      </h1>
      <h2 className="text-lg font-bold text-center">
        {getOrdinal(parliament?.nth)} Parliament ({parliament?.term})
      </h2>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="border border-red-500 p-2 rounded">
          <h3 className="text-xl font-bold text-center">Prime Minister</h3>
          <p className="text-center">
            {parliament?.pm?.name} ({capitalize(parliament?.pm?.party)})
          </p>
        </div>
        <div className="border border-red-500 p-2 rounded">
          <h3 className="text-xl font-bold text-center">Speaker</h3>
          <p className="text-center">
            {parliament?.speaker?.name} (
            {capitalize(parliament?.speaker?.party)})
          </p>
        </div>
        <div className="border border-red-500 p-2 rounded">
          <h3 className="text-xl font-bold text-center">Leading Party</h3>
          <p className="text-center">
            {parliament?.leadingParty?.name} (
            {capitalize(parliament?.leadingParty?.type)})
          </p>
        </div>
        <div className="border border-red-500 p-2 rounded">
          <h3 className="text-xl font-bold text-center">Main Opposition</h3>
          <p className="text-center">
            {parliament?.mainOpposition?.name} (
            {capitalize(parliament?.mainOpposition?.type)})
          </p>
        </div>
      </div>
      <Separator className="my-2" />
      <div className="grid grid-cols-4">
        {parliamentButtons.map((button, index) => (
          <IconButton
            key={index}
            className="m-1"
            icon={button.icon}
            onClick={button.onClick}
            variant="danger"
          >
            {button.name}
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default ParliamentPage;
