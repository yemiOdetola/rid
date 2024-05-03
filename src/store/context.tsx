import React, { createContext, useEffect, useState } from "react";
import { Event, events as baseEvents } from "../utils/data";

export interface AppState {
  events: Event[];
  selectedEvent: Event | null;
  handleCreate: (newEvent: Event) => void;
  handleEdit: (updatedEvent: Event) => void;
  deleteEvent: (eventId: string | number) => void;
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  setSelectedEvent: React.Dispatch<React.SetStateAction<Event | null>>;
}

const AppContext = createContext<AppState | undefined>(undefined);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [events, setEvents] = useState<Event[]>(() => {
    const storedEvents = localStorage.getItem("events");
    return storedEvents !== null && storedEvents !== "[]"
      ? JSON.parse(storedEvents)
      : baseEvents;
  });
  
  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents !== null && storedEvents !== "[]") {
      setEvents(JSON.parse(storedEvents));
    } else {
      setEvents(baseEvents);
      localStorage.setItem("events", JSON.stringify(baseEvents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleCreate = (newEvent: Event) => {
    setEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, newEvent];
      localStorage.setItem("events", JSON.stringify(updatedEvents));
      return updatedEvents;
    });
  };

  const handleEdit = (updatedEvent: Event) => {
    console.log("update", updatedEvent);
    console.log("events 35", events);
    const prevEvents: Event[] = [...events];
    const updatedEvents: Event[] = [];

    for (const evt of prevEvents) {
      if (evt.id === updatedEvent.id) {
        updatedEvents.push(updatedEvent);
      } else {
        updatedEvents.push(evt);
      }
    }

    console.log("upEvjdsjkds", updatedEvents);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const deleteEvent = (eventId: string | number) => {
    setEvents((prevEvents) =>
      prevEvents.filter((event) => event.id !== eventId)
    );
  };

  const state: AppState = {
    events,
    selectedEvent,
    setEvents,
    setSelectedEvent,
    handleCreate,
    handleEdit,
    deleteEvent,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
