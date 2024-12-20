"use client";

import IconButton from "@/components/IconButton";
import React from "react";
import { ActionButtons } from "@/data/actionButtons";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import useActions from "@/store/actions-store";

const Actions: React.FC = () => {
  const { actions } = useActions();

  return (
    <div className="p-3">
      {Object.keys(actions).map((key) => {
        return (
          <div key={key} className="my-2">
            <h3 className="text-xl border-2 border-red-500 rounded mb-1 font-bold text-center">
              {key}
            </h3>
            <div className="grid grid-cols-2 gap-1">
              {actions[key as keyof ActionButtons].map((action, index) => {
                const Icon = action?.icon;
                return action?.route ? (
                  <Link key={index} href={action.route}>
                    <IconButton
                      className="w-full"
                      variant="danger"
                      key={index}
                      icon={Icon}
                    >
                      {action.name}
                    </IconButton>
                  </Link>
                ) : (
                  <IconButton
                    variant="danger"
                    key={index}
                    icon={Icon}
                    onClick={
                      action?.onClick
                        ? () => action?.onClick()
                        : () => console.log("No action assigned")
                    }
                    audio={action?.audio}
                  >
                    {action.name}
                  </IconButton>
                );
              })}
            </div>
            <Separator className="mt-1" />
          </div>
        );
      })}
    </div>
  );
};

export default Actions;
