"use client";

import ProgressBar from "@/components/ProgressBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Support } from "@/schema/stats";
import React from "react";

interface SupportsProps {
  data: Support;
}

const Supports: React.FC<SupportsProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="my-1 p-2 rounded border-2 border-red-500">
      <h4 className="text-lg text-red-500 font-bold">Supports</h4>
      <Separator />
      <Accordion type="single" collapsible className="w-full" defaultValue="citizens">
        {Object.entries(data).map(([key, value], i) => (
          <AccordionItem key={i} value={key}>
            <AccordionTrigger>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </AccordionTrigger>
            <AccordionContent>
              {Object.entries(value).map(([key, value], i) => (
                <ProgressBar
                  key={i}
                  value={value}
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Supports;
