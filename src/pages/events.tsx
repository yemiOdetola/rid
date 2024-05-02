import { Calendar, luxonLocalizer } from "react-big-calendar";
import { LayoutContainer } from "../components/layout";
import { events } from "../utils/data";
import EventsTable from "../components/events-table";
import { useState } from "react";
import { DateTime } from "luxon";

export default function Events() {
  const [tab, setTab] = useState<"list" | "calendar">("list");
  const localizer = luxonLocalizer(DateTime);
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
          <div className="myCustomHeight">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: "80vh" }}
            />
          </div>
        ) : null}
      </div>
    </LayoutContainer>
  );
}
