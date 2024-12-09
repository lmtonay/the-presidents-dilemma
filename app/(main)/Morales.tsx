"use client";

import ProgressBar from "@/components/ProgressBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Morale } from "@/schema/stats";
import React from "react";

interface MoralesProps {
  data: Morale;
}

const Morales: React.FC<MoralesProps> = ({ data }) => {
  return (
    <div className="my-1 p-2 rounded border-2 border-red-500">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="border-0" value="morale">
          <AccordionTrigger>
            <h4 className="text-lg text-red-500 font-bold">Morales</h4>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              {Object.entries(data)?.map(([key, value], i) => (
                <ProgressBar
                  key={i}
                  value={value}
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  isReverse={key === "corruption" || key === "crime"}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Morales;
