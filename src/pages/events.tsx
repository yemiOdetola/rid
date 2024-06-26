import { useContext, useEffect, useState } from "react";
import { DateTime } from "luxon";
import { X } from "lucide-react";
import { Calendar, luxonLocalizer } from "react-big-calendar";
import { LayoutContainer } from "../components/layout";
import { Event } from "../utils/data";
import { EventsTable, EditEvent, EventDetails, Drawer } from "../components";
import { AppContext } from "../store/context";

export default function Events() {
  const { events, deleteEvent } = useContext(AppContext)!;
  const [tab, setTab] = useState<"list" | "calendar">("list");
  const [eventObjs, setEventObjs] = useState<Event[]>(events);
  const [drawerState, toggleDrawerState] = useState<boolean>(false);
  const [drawerType, setDrawerType] = useState<"edit" | "view">("view");
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const localizer = luxonLocalizer(DateTime);

  useEffect(() => {
    const ele = [];
    for (let ev of events) {
      ev.start = new Date(ev.start);
      ev.end = new Date(ev.start);
      ele.push(ev);
    }
    setEventObjs(ele);
  }, [events]);

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

  const removeEvent = (eventId: string) => {
    if (window.confirm("Do you want to delete this event?")) {
      toggleDrawerState(false);
      deleteEvent(eventId);
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
        {tab === "list" ? (
          <EventsTable events={events} viewEvent={viewEvent} pagination />
        ) : null}
        {tab === "calendar" ? (
          <Calendar
            localizer={localizer}
            events={eventObjs}
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
            // onSave={(event) => console.log("event", event)}
            onCancel={() => toggleDrawerState(false)}
          />
        )}
        {drawerType === "view" && currentEvent && (
          <EventDetails
            currentEvent={currentEvent}
            toggleDrawerState={toggleDrawerState}
            editEvent={() => editEvent(currentEvent)}
            deleteEvent={removeEvent}
          />
        )}
      </Drawer>
    </LayoutContainer>
  );
}
