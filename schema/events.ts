import Stats from "./stats";

export type Events = {
  date: string;
  day: string;
  events: Event[];
};

type Event = {
  action: string;
  title: string;
  description: string;
  influence: EventInfluence;
  type: string;
};

type EventInfluence = {
  support?: Stats['support'];
  morals?: Stats['moral'];
  finance?: Stats['finance'];
  parliament?: Stats['support']['parliament'];
  judiciary?: Stats['support']['judiciary'];
  international?: Stats['support']['international'];
};