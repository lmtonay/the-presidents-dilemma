"use client";

import InputField from "@/components/InputField";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { startGame } from "@/lib/gameFunctions";
import { capitalize } from "@/lib/utils";
import { Continent, PartyType } from "@/schema/stats";
import useStats from "@/store/stats-store";

type Field = {
  label: string;
  default: string | number | undefined;
  isDropdown?: boolean;
  options?: { label: string; value: string }[];
  type?: string;
  key: keyof Data;
};

type Data = {
  difficulty: string;
  continent: Continent;
  countryName: string;
  capitalCity: string;
  presidentName: string;
  presidentAge: number;
  currency: string;
  language: string;
  partyType: PartyType;
  partyName: string;
};

const NewGame: React.FC = () => {
  const { stats } = useStats();

  const data: Data = {
    difficulty: stats?.gameData?.difficulty || "",
    continent: stats?.countryInfo?.continent as Continent,
    countryName: stats?.countryInfo?.name || "",
    capitalCity: stats?.countryInfo?.capital || "",
    presidentName: stats?.presidentInfo?.name || "",
    presidentAge: stats?.presidentInfo?.age || 0,
    currency: stats?.countryInfo?.currency || "",
    language: stats?.countryInfo?.language || "",
    partyType: stats?.presidentInfo?.party  as PartyType,
    partyName: stats?.presidentInfo?.partyName || "",
  };

  const fields: Field[] = [
    {
      label: "Difficulty",
      default: stats?.gameData?.difficulty,
      isDropdown: true,
      options: [
        {
          label: "Easy (Preset for a developed country)",
          value: "easy",
        },
        {
          label: "Normal (Preset for a developing country)",
          value: "normal",
        },
        {
          label: "Tough (Preset for an underdeveloped country)",
          value: "tough",
        },
      ],
      key: "difficulty",
    },
    {
      label: "Continent",
      default: stats?.countryInfo?.continent,
      isDropdown: true,
      options: [
        {
          label: "Asia",
          value: "Asia",
        },
        {
          label: "Europe",
          value: "Europe",
        },
        {
          label: "Africa",
          value: "Africa",
        },
        {
          label: "North America",
          value: "North America",
        },
        {
          label: "South America",
          value: "South America",
        },
        {
          label: "Oceania",
          value: "Oceania",
        },
      ],
      key: "continent",
    },
    {
      label: "Country Name",
      default: stats?.countryInfo?.name,
      key: "countryName",
    },
    {
      label: "Capital City",
      default: stats?.countryInfo?.capital,
      key: "capitalCity",
    },
    {
      label: "President Name",
      default: stats?.presidentInfo?.name,
      key: "presidentName",
    },
    {
      label: "President Age",
      default: stats?.presidentInfo?.age,
      key: "presidentAge",
      type: "number",
    },
    {
      label: "Party Type",
      default: stats?.presidentInfo?.party,
      isDropdown: true,
      options: Object.keys(stats?.support?.parliament).map((s) => {
        return {
          label: capitalize(s),
          value: s,
        };
      }),
      key: "partyType",
    },
    {
      label: "Party Name",
      default: stats?.presidentInfo?.partyName,
      key: "partyName",
    },
    {
      label: "Currency",
      default: stats?.countryInfo?.currency,
      key: "currency",
    },
    {
      label: "Language",
      default: stats?.countryInfo?.language,
      key: "language",
    },
  ];

  const updateData = <K extends keyof Data>(key: K, value: Data[K]) => {
    data[key] = value;
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
          {fields.map((field, index) => {
            return (
              <InputField
                key={index}
                label={
                  field.isDropdown ? field.label + " (Default selected: " + field.default + ")" : field.label
                }
                defaultValue={field.default}
                isDropdown={field.isDropdown}
                options={field.options}
                type={field.type}
                onChange={(e) =>
                  updateData(field.key, field.type === "number" ? +e.target.value : e.target.value)
                }
                onValueChange={(value) => updateData(field.key, value)}
                placeholder={field.label}
              />
            );
          })}
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
