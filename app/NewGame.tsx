"use client";

import InputField from "@/components/InputField";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StatsContext } from "@/contexts/StatsContext";
import { startGame } from "@/lib/gameFunctions";
import React, { useContext } from "react";

const NewGame: React.FC = () => {
  const { stats } = useContext(StatsContext);

  const data = {
    difficulty: stats?.gameData?.difficulty,
    continent: stats?.countryInfo?.continent,
    countryName: stats?.countryInfo?.name,
    capitalCity: stats?.countryInfo?.capital,
    presidentName: stats?.presidentInfo?.name,
    presidentAge: stats?.presidentInfo?.age,
    currency: stats?.countryInfo?.currency,
    language: stats?.countryInfo?.language,
    partyType: stats?.presidentInfo?.party,
    partyName: stats?.presidentInfo?.partyName,
  };

  return stats?.gameData?.new ? (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-90 backdrop-blur z-10">
      <div className="bg-white w-[50vw] rounded p-4 h-[80vh] overflow-auto">
        <h3 className="text-2xl font-bold">
          Welcome to{" "}
          <span className="text-red-500 title">
            The President&apos;s Dilemma
          </span>
        </h3>
        <p className="mt-2">
          You are gonna govern a whole country just like a president. Are you
          ready? Let&apos;s start!
        </p>
        <Separator className="my-2" />
        <p>
          <b>Or,</b> customize your experience
        </p>
        <div>
          <InputField
            label={
              "Difficulty (Default selected is " +
              stats?.gameData?.difficulty +
              ")"
            }
            placeholder="Difficulty"
            className="mt-2"
            onValueChange={(value) => {
              data.difficulty = value;
            }}
            isDropdown
            options={["easy", "normal", "tough"]}
            defaultValue={stats?.gameData?.difficulty}
          />
          <InputField
            label={
              "Continent (Default selected is " +
              stats?.countryInfo?.continent +
              ")"
            }
            placeholder="Continent"
            className="mt-2"
            onValueChange={(value) => {
              data.continent = value;
            }}
            isDropdown
            options={[
              "Asia",
              "Europe",
              "Africa",
              "North America",
              "South America",
              "Oceania",
            ]}
            defaultValue={stats?.countryInfo?.continent}
          />
          <InputField
            label="Country Name"
            placeholder="Enter your country name"
            className="mt-2"
            onChange={(e) => {
              data.countryName = e.target.value;
            }}
            defaultValue={stats?.countryInfo?.name}
          />
          <InputField
            label="Capital City"
            placeholder="Enter your capital city"
            className="mt-2"
            onChange={(e) => {
              data.capitalCity = e.target.value;
            }}
            defaultValue={stats?.countryInfo?.capital}
          />
          <InputField
            label="President Name"
            placeholder="Enter your president name"
            className="mt-2"
            onChange={(e) => {
              data.presidentName = e.target.value;
            }}
            defaultValue={stats?.presidentInfo?.name}
          />
          <InputField
            label="President Age"
            placeholder="Enter your president age"
            type="number"
            className="mt-2"
            onChange={(e) => {
              data.presidentAge = parseInt(e.target.value);
            }}
            defaultValue={stats?.presidentInfo?.age}
          />
          <InputField
            label={
              "Party Type (Default selected is " +
              stats?.presidentInfo?.party +
              ")"
            }
            placeholder="Enter your party type"
            className="mt-2"
            onValueChange={(value) => {
              data.partyType = value;
            }}
            isDropdown
            options={Object.keys(stats?.support?.parliament).map((s) =>
              s.toUpperCase()
            )}
            defaultValue={stats?.presidentInfo?.party}
          />
          <InputField
            label="Party Name"
            placeholder="Enter your party name (country name will be added as prefix)"
            className="mt-2"
            onChange={(e) => {
              data.partyName = e.target.value;
            }}
            defaultValue={stats?.presidentInfo?.partyName}
          />
          <InputField
            label="Currency"
            placeholder="Enter your currency"
            className="mt-2"
            onChange={(e) => {
              data.currency = e.target.value;
            }}
            defaultValue={stats?.countryInfo?.currency}
          />
          <InputField
            label="Language"
            placeholder="Enter your language"
            className="mt-2"
            onChange={(e) => {
              data.language = e.target.value;
            }}
            defaultValue={stats?.countryInfo?.language}
          />
          <Button
            onClick={() => startGame(data)}
            variant="danger"
            className="mt-4 w-full"
          >
            Start Game
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default NewGame;
