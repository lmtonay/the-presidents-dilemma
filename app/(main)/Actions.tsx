"use client";

import IconButton from "@/components/IconButton";
import actionButtons from "@/data/actionButtons";
import React from "react";
import { ActionButtons } from "@/data/actionButtons";
import { Separator } from "@/components/ui/separator";

const Actions: React.FC = () => {
  return (
    <div className="p-3">
      {Object.keys(actionButtons).map((key) => {
        return (
          <div key={key} className="my-2">
            <h3 className="text-xl border-2 border-red-500 rounded mb-1 font-bold text-center">{key}</h3>
            <div className="grid grid-cols-2 gap-1">
              {actionButtons[key as keyof ActionButtons].map(
                (action, index) => {
                  const Icon = action.icon;
                  return (
                    <IconButton
                      variant="danger"
                      key={index}
                      icon={Icon}
                      onClick={action.onClick}
                    >
                      {action.name}
                    </IconButton>
                  );
                }
              )}
            </div>
            <Separator className="mt-1" />
          </div>
        );
      })}
    </div>
  );
};

export default Actions;
