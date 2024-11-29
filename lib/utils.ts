import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function reverseString(str: string) {
  return str.split("").reverse().join("");
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
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

export function influenceFormat (key: string, value: number) {
  if (key.toLowerCase().includes('finance')) {
    return `৳${value > 0 ? '+' : ''}${value}`;
  }
  return `${value > 0 ? '+' : ''}${value}`;
}
