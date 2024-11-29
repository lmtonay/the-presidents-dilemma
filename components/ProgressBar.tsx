"use client";

import React from "react";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  label: string;
  value: number;
  isReverse?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
  isReverse = false,
}) => {
  return (
    <div className="grid grid-cols-2 items-center">
      <small className="inline-block">{label}: </small>
      <div className="relative w-full">
        <Progress
          variant={
            isReverse
              ? value >= 60
                ? "danger"
                : value < 30
                ? "success"
                : "intermediate"
              : value >= 60
              ? "success"
              : value < 30
              ? "danger"
              : "intermediate"
          }
          value={value}
        />
        <small
          className={cn(
            "absolute inset-0 flex left-2 justify-start items-center",
            value > 25 ? "text-white" : "text-black"
          )}
        >
          {value}%
        </small>
      </div>
    </div>
  );
};

export default ProgressBar;
