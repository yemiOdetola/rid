import { useState } from "react";
import { DateTime } from "luxon";
import { X } from "lucide-react";
import { Calendar, luxonLocalizer } from "react-big-calendar";
import { LayoutContainer } from "../../components/layout";
import { Event, events } from "../../utils/data";
import EventsTable from "../../components/events-table";
import Drawer from "../../components/drawer";
import EditEvent from "./edit-event";
import EventDetails from "./event-details";

const defaultEvent: Event = {
  title: "",
  description: "",
  start: new Date(),
  end: new Date(),
  organizer: "",
};

export default function Events() {
  const [tab, setTab] = useState<"list" | "calendar">("list");
  const [drawerState, toggleDrawerState] = useState<boolean>(false);
  const [drawerType, setDrawerType] = useState<"edit" | "view">("view");
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const localizer = luxonLocalizer(DateTime);

  console.log('currentEvent:::', currentEvent);

  const viewEvent = (event: Event) => {
    setDrawerType("view");
    setCurrentEvent(event);
    toggleDrawerState(true);
  };

  const editEvent = (event: Event | null) => {
    setCurrentEvent(event);
    setDrawerType("edit");
    toggleDrawerState(true);
  };

  const deleteEvent = (eventId: string) => {
    if (window.confirm("Do you want to delete this event?")) {
      console.log(eventId);
    }
  };

  return (
    <LayoutContainer>
      <div className="events-container">
        <div className="header">
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
          <button onClick={() => editEvent(null)}>Create an event</button>
        </div>
        {tab === "list" ? <EventsTable events={events} /> : null}
        {tab === "calendar" ? (
          <Calendar
            localizer={localizer}
            events={events}
            style={{ height: "80vh" }}
            onSelectEvent={viewEvent}
          />
        ) : null}
      </div>
      <Drawer
        isOpen={drawerState}
        onClose={() => toggleDrawerState(false)}
        position="right"
      >
        <X onClick={() => toggleDrawerState(false)} />
        {drawerType === "edit" && (
          <EditEvent
            event={currentEvent}
            onSave={(event) => console.log("event", event)}
            onCancel={() => toggleDrawerState(false)}
          />
        )}
        {drawerType === "view" && currentEvent && (
          <EventDetails
            currentEvent={currentEvent}
            toggleDrawerState={toggleDrawerState}
            editEvent={() => editEvent(currentEvent)}
            deleteEvent={deleteEvent}
          />
        )}
      </Drawer>
    </LayoutContainer>
  );
}
