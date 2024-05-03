import { useContext, useState } from "react";
import { DateTime } from "luxon";
import { X } from "lucide-react";
import { Calendar, luxonLocalizer } from "react-big-calendar";
import { LayoutContainer } from "../../components/layout";
import { Event } from "../../utils/data";
import EventsTable from "../../components/events-table";
import Drawer from "../../components/drawer";
import EditEvent from "./edit-event";
import EventDetails from "./event-details";
import { AppContext } from "../../store/Context";

export default function Events() {
  const { events, deleteEvent } = useContext(AppContext)!;
  const [tab, setTab] = useState<"list" | "calendar">("list");
  const [drawerState, toggleDrawerState] = useState<boolean>(false);
  const [drawerType, setDrawerType] = useState<"edit" | "view">("view");
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const localizer = luxonLocalizer(DateTime);

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
          <EventsTable events={events} viewEvent={viewEvent} />
        ) : null}
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
