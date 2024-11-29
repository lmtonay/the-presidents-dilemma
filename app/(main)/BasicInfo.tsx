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
        <h1 className="text-lg text-red-500 font-bold">{country?.name}</h1>
        <Separator />
        <div className="grid grid-cols-2 gap-1">
          <div className="border-r-2">
            <div>
               <small>Population: {(country?.population / 1000000).toFixed(2)}M</small>
            </div>
            <div>
              <small>Capital: {country?.capital}</small>
            </div>
          </div>
          <div>
            <div>
              <small>Area: {country?.area} km²</small>
            </div>
            <div>
              <small>Currency: {country?.currency}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
