import { Separator } from "@/components/ui/separator";
import { Finance } from "@/schema/stats";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FinanceProps {
  data: Finance;
}

const Finances: React.FC<FinanceProps> = ({ data }) => {
  return (
    <div className="my-1 p-2 rounded border-2 border-red-500">
      <h4 className="text-lg text-red-500 font-bold">Finances</h4>
      <Separator className="mb-2" />
      <div className="flex flex-col gap-2">
        {Object.entries(data).map(
          ([key, value], i) =>
            key != "tax" && (
              <div
                key={i}
                className="flex flex-row justify-between items-center"
              >
                <h5 className="text-sm">{key.charAt(0).toUpperCase() + key.slice(1)}</h5>
                <small>
                  ৳{typeof value === "number" ? value : JSON.stringify(value)}
                </small>
              </div>
            )
        )}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem className="border-0" value="tax">
            <AccordionTrigger>
              <h5>Taxes</h5>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col">
                {Object.entries(data.tax).map(([key, value], i) => (
                  <div
                    key={i}
                    className="flex flex-row justify-between items-center"
                  >
                    <h6>{key.charAt(0).toUpperCase() + key.slice(1)}</h6>
                    <p>{value}%</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Finances;
