"use client";

import { cn, flatten, influenceFormat } from "@/lib/utils";
import { useMemo } from "react";

const reverseString = (str: string): string => {
  if (!str) return "";

  // Split the string into words using uppercase letters as boundaries
  const words = str.split(/(?=[A-Z])/);

  // If there are more than 3 words, reverse the first two words and append them at the end
  if (words.length > 3) {
    const firstTwoReversed = words.slice(0, 2).reverse();
    const remainingWords = words.slice(2);
    return [...remainingWords, ...firstTwoReversed].join(" ").toUpperCase();
  }

  // Otherwise, return the usual behavior (reverse all words and join with spaces)
  return words.reverse().join(" ").toUpperCase();
};

interface EventProps {
  action: string;
  title: string;
  description: string;
  type: string;
  influence: object;
}

const Event: React.FC<EventProps> = ({
  action,
  title,
  description,
  type,
  influence,
}) => {
  const influenceArr = useMemo(
    () =>
      Object.entries(flatten(influence)).filter(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_key, value]) => typeof value === "number"
      ),
    [influence]
  );

  return (
    <div className="border-red-500 border rounded p-2">
      <div className="flex flex-row justify-between items-center mb-3">
        <div className="text-xl mt-1 font-bold">
          <h5 className="text-red-500 inline">{action}</h5>:{" "}
          <h5 className="inline">{title}</h5>
        </div>
        <div className="bg-red-500 m-0 flex h-6 items-center px-2 rounded-full ">
          <p className="font-bold text-white m-0 text-xs p-0">
            {type.toUpperCase()}
          </p>
        </div>
      </div>
      <p className="text-md mb-2">{description}</p>
      <ul className="text-xs list-disc">
        <div className="grid grid-cols-2 gap-4">
          <div>
            {
              // first half of the influence object
              influenceArr
                .slice(
                  0,
                  Math.ceil(influenceArr.length / 2)
                )
                .map(([key, value], i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center my-1"
                  >
                    <b>{reverseString(key)}:</b>
                    <b
                      className={cn(
                        {
                          "bg-green-500": value > 0,
                          "bg-red-500": value < 0,
                        },
                        "p-[2px] py-0 text-white rounded"
                      )}
                    >
                      {influenceFormat(key, value)}
                    </b>
                  </li>
                ))
            }
          </div>
          <div>
            {influenceArr
              .slice(
                Math.ceil(influenceArr.length / 2),
                influenceArr.length
              )
              .map(([key, value], i) => (
                <li key={i} className="flex justify-between items-center my-1">
                  <b>{reverseString(key)}:</b>
                  <b
                    className={cn(
                      {
                        "bg-green-500": value > 0,
                        "bg-red-500": value < 0,
                      },
                      "p-[2px] py-0 text-white rounded"
                    )}
                  >
                    {influenceFormat(key, value)}
                  </b>
                </li>
              ))}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Event;
