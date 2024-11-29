"use client";

import { Separator } from "@/components/ui/separator";
import { CountryInfo } from "@/schema/stats";
import React from "react";

interface BasicInfoProps {
  country: CountryInfo;
}

const BasicInfo: React.FC<BasicInfoProps> = ({ country }) => {
  return (
    <div>
      <div className="my-1 p-2 rounded border-2 border-red-500">
        <h1 className="text-lg text-red-500 font-bold">
          Country: <span className="text-black italic">{country?.name}</span>
        </h1>
        <Separator />
        <div className="grid grid-cols-2 gap-1">
          <div className="border-r-2">
            <div>
              <small>
                Population: <i>{(country?.population / 1000000).toFixed(2)}M</i>
              </small>
            </div>
            <div>
              <small>
                Capital: <i>{country?.capital}</i>
              </small>
            </div>
            <div>
              <small>Continent: <i>{country?.continent}</i></small>
            </div>
          </div>
          <div>
            <div>
              <small>Area: <i>{country?.area} km²</i></small>
            </div>
            <div>
              <small>Currency: <i>{country?.currency}</i></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
