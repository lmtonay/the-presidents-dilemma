"use client";

import { cn, flatten, influenceFormat } from "@/lib/utils";

/**
 * Reverses the order of words in a given string, where words are defined as sequences of characters
 * separated by uppercase letters. The resulting string is converted to uppercase.
 *
 * @param {string} str - The input string to be reversed.
 * @returns {string} - The reversed string with words separated by spaces and converted to uppercase.
 */
const reverseString = (str: string) => {
  if (!str) return "";
  return str
    .split(/(?=[A-Z])/)
    .reverse()
    .join(" ")
    .toUpperCase();
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
}) => (
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
            Object.entries(flatten(influence))
              .slice(
                0,
                Math.ceil(Object.entries(flatten(influence)).length / 2)
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
              ))
          }
        </div>
        <div>
          {
            Object.entries(flatten(influence))
              .slice(
                Math.ceil(Object.entries(flatten(influence)).length / 2),
                Object.entries(flatten(influence)).length
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
              ))
          }
        </div>
      </div>
    </ul>
  </div>
);

export default Event;
