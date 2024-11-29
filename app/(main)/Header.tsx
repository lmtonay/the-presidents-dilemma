"use client";

import { StatsContext } from "@/contexts/StatsContext";
import { useContext } from "react";

const Header: React.FC = () => {
  const { stats } = useContext(StatsContext);

  return (
    <div className="sticky top-0 w-full">
      <div
        className="
          py-3
          bg-red-500
          text-center
          text-white
        "
      >
        <h1
          className="
            text-3xl
            font-bold
          "
        >
          The President&apos;s Dilemma
        </h1>
        <p className="text-sm">A game to govern your desired state like a president.</p>
      </div>
      <div className="bg-gray-100 p-1">
        {/* this will display the ingame date and president's name */}
        <div className="flex justify-between">
          <div>
            <h5 className="text-md font-bold">Day {stats?.gameData?.day} - {stats?.gameData?.date}</h5>
            <h5 className="text-md font-bold">Balance: ৳{stats?.presidentInfo?.money}</h5>
          </div>
          <div className="text-end">
            <h5 className="text-md font-bold">President {stats?.presidentInfo?.name}</h5>
            <h5 className="text-md font-bold">{stats?.presidentInfo?.partyName} - Term: {stats?.presidentInfo?.term}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
