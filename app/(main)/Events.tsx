"use client";

import { Separator } from "@/components/ui/separator";
import Event from "./Event";
import useEvents from "@/store/events-store";
import { useEffect } from "react";

const Events: React.FC = () => {
  const { events } = useEvents();

  useEffect(() => {
    // scroll to the bottom of the events list
    const eventsList = document.getElementById("events-list");
    if (eventsList) {
      eventsList.scrollTop = eventsList.scrollHeight;
    }
  }, [events]);

  return (
    <div className="p-3" id="events-list">
      {events?.map((event, index) => (
        <div key={index}>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between bg-red-500 text-white p-1 px-3 rounded">
              <h3 className="text-lg font-bold">{event.date}</h3>
              <h3 className="text-lg font-bold">Day {event.day}</h3>
            </div>
            <div className="flex flex-col gap-2">
              {event.events?.map((e, i) => (
                <Event key={i} {...e} />
              ))}
            </div>
          </div>
          <Separator className="my-2" />
        </div>
      ))}
    </div>
  );
};

export default Events;
