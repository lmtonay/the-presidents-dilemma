"use client";

import ProgressBar from "@/components/ProgressBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Moral } from "@/schema/stats";
import React from "react";

interface MoralsProps {
  data: Moral;
}

const Morals: React.FC<MoralsProps> = ({ data }) => {
  return (
    <div className="my-1 p-2 rounded border-2 border-red-500">
      {/* <h4 className="text-lg text-red-500 font-bold">Morals</h4>
      <div className="flex flex-col gap-2">
        {Object.entries(data).map(([key, value], i) => (
          <div key={i} className="flex flex-row justify-between items-center">
            <h5>{key.charAt(0).toUpperCase() + key.slice(1)}</h5>
            <p>{value}</p>
          </div>
        ))}
      </div> */}

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="border-0" value="morals">
          <AccordionTrigger>
            <h4 className="text-lg text-red-500 font-bold">Morals</h4>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              {Object.entries(data).map(([key, value], i) => (
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

export default Morals;
