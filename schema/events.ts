"use client";

import Stats from "./stats";

export type Events = {
  date: string;
  day: number;
  events: Event[];
};

export type Event = {
  action: string;
  title: string;
  description: string;
  influence: EventInfluence;
  type: string;
};

export type EventInfluence = {
  [key in keyof Partial<Stats>]?: Partial<Stats[key]>;
};