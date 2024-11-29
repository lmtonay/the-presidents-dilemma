export type Events = {
  date: string;
  day: string;
  events: Event[];
};

type Event = {
  action: string;
  title: string;
  description: string;
  influence: object;
  type: string;
};
