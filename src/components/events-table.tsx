import React from "react";
import { Event } from "../utils/data";
import { CloudSnow } from "lucide-react";

interface Props {
  events: Event[];
  viewEvent: (event: Event) => void;
}

const EventsTable = ({ events, viewEvent }: Props) => {
  const renderTableRows = () => {
    return events
      .map((event, index) => (
        <tr key={`event-${index}`}>
          <td
            className="underline"
            data-column="ID"
            onClick={() => viewEvent(event)}
          >
            Event-{event.id}
          </td>
          <td data-column="Title">{event.title}</td>
          <td data-column="Organizer">{event.organizer}</td>
          <td data-column="Description">
            {event.description.substring(0, 55)}...
          </td>
          <td data-column="Duration">
            {new Date(event.start).toDateString()} -{" "}
            {new Date(event.end).toDateString()}
          </td>
        </tr>
      ))
      .reverse();
  };

  if (!events || events.length === 0) {
    return (
      <div className="empty-state">
        <h3>No events</h3>
        <CloudSnow size={80} />
      </div>
    );
  }

  return (
    <table className="events">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Organizer</th>
          <th>Description</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>{renderTableRows()}</tbody>
    </table>
  );
};

export default EventsTable;
