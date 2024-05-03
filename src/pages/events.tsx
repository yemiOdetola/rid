import { Calendar, luxonLocalizer } from "react-big-calendar";
import { LayoutContainer } from "../components/layout";
import { Event, events } from "../utils/data";
import EventsTable from "../components/events-table";
import { useState } from "react";
import { DateTime } from "luxon";
import Drawer from "../components/drawer";

export default function Events() {
  const [tab, setTab] = useState<"list" | "calendar">("list");
  const [drawerState, toggleDrawerState] = useState<boolean>(false);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const localizer = luxonLocalizer(DateTime);

  const handleEventClick = (event: Event) => {
    toggleDrawerState(true);
    setCurrentEvent(event);
    console.log("eekkekekekeelellel", event);
  };

  return (
    <LayoutContainer>
      <div className="events-container">
        <div className="button-group">
          <button
            className={tab === "list" ? "active" : ""}
            onClick={() => setTab("list")}
          >
            Events List
          </button>
          <button
            className={tab === "calendar" ? "active" : ""}
            onClick={() => setTab("calendar")}
          >
            Events calendar
          </button>
        </div>
        {tab === "list" ? <EventsTable events={events} /> : null}
        {tab === "calendar" ? (
          <Calendar
            localizer={localizer}
            events={events}
            style={{ height: "80vh" }}
            onSelectEvent={handleEventClick}
          />
        ) : null}
      </div>
      <Drawer
        isOpen={drawerState}
        onClose={() => toggleDrawerState(false)}
        position="right"
      >
        {currentEvent && currentEvent.title ? (
          <div className="open-event">
            <h1>{currentEvent.title}</h1>
            <h1>Heyyyy</h1>
            <h1>Heyyyy</h1>
            <h1>Heyyyy</h1>
            <h1>Heyyyy</h1>
            <h1>Heyyyy</h1>
            <h1>Heyyyy</h1>
            <h1>Heyyyy</h1>
          </div>
        ) : null}
      </Drawer>
    </LayoutContainer>
  );
}
