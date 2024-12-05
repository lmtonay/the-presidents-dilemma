import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function reverseString(str: string) {
  return str.split("").reverse().join("");
}

export function capitalize(str: string) {
  return str?.charAt(0)?.toUpperCase() + str?.slice(1);
}

export const flatten = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: any,
  parentKey = "",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  res: { [key: string]: any } = {}
) => {
  for (const key in obj) {
    const propName = parentKey
      ? `${parentKey}${key.charAt(0).toUpperCase() + key.slice(1)}`
      : key;
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      flatten(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
};

export function influenceFormat(key: string, value: number) {
  if (key.toLowerCase().includes("finance")) {
    return `${value > 0 ? "+৳" : "-৳"}${Math.abs(value)}`;
  }
  return `${value > 0 ? "+" : ""}${value}`;
}

export function sentenceToWord(sentence: string) {
  return sentence
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

export function numberToSuffix(n: number) {
  if (n < 1000) return n;
  if (n < 1000000) return `${(n / 1000).toFixed(2)}K`;
  if (n < 1000000000) return `${(n / 1000000).toFixed(2)}M`;
  if (n < 1000000000000) return `${(n / 1000000000).toFixed(2)}B`;
  return `${(n / 1000000000000).toFixed(2)}T`;
}

export function getOrdinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export const randArrEl = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const randInt = ({
  min,
  max,
  arr,
}: {
  min?: number;
  max?: number;
  arr?: [number, number];
}) => {
  if (arr) return Math.floor(Math.random() * (arr[1] - arr[0] + 1) + arr[0]);
  if (min && max) return Math.floor(Math.random() * (max - min + 1) + min);
  return Math.floor(Math.random() * 100000);
}
