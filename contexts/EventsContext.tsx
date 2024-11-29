"use client";

import { dummyEvents } from "@/data/dummyEvents";
import { Events } from "@/schema/events";
import React, { createContext, useState, useEffect } from "react";

const EventsContext = createContext<{
  events: Events[];
  setEvents: React.Dispatch<React.SetStateAction<Events[]>>;
}>({
  events: [],
  setEvents: () => {},
});

const EventsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [events, setEvents] = useState(() => {
    // Load initial state from localStorage
    const savedEvents =
      typeof window !== "undefined" ? localStorage.getItem("events") : null;
    return savedEvents
      ? JSON.parse(savedEvents)
      : dummyEvents;
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <EventsContext.Provider value={{ events, setEvents }}>
      {children}
    </EventsContext.Provider>
  );
};

export { EventsContext, EventsProvider };
