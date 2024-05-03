import { useState } from "react";
import { DateTime } from "luxon";
import { X } from "lucide-react";
import { Calendar, luxonLocalizer } from "react-big-calendar";
import { LayoutContainer } from "../../components/layout";
import { Event, events } from "../../utils/data";
import EventsTable from "../../components/events-table";
import Drawer from "../../components/drawer";
import EditEvent from "./edit-event";
import { formatDate } from "../../utils";
import EventDetails from "./event-details";

// const defaultEvent: Event = {
//   title: "",
//   description: "",
//   start: new Date(),
//   end: new Date(),
//   organizer: "",
// };

export default function Events() {
  const [tab, setTab] = useState<"list" | "calendar">("list");
  const [drawerState, toggleDrawerState] = useState<boolean>(false);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const localizer = luxonLocalizer(DateTime);

  const handleEventClick = (event: Event) => {
    setCurrentEvent(event);
    toggleDrawerState(true);
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
        <X onClick={() => toggleDrawerState(false)} />
        {currentEvent && (
          <EditEvent
            event={currentEvent}
            onSave={(event) => console.log("event", event)}
            onCancel={() => console.log("cancelleddd!")}
          />
        )}
        {currentEvent && (
          <EventDetails
            currentEvent={currentEvent}
            toggleDrawerState={toggleDrawerState}
          />
        )}
      </Drawer>
    </LayoutContainer>
  );
}
