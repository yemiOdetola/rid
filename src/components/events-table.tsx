import React from "react";
import { Event } from "../utils/data";

interface Props {
  events: Event[];
}

const EventsTable = ({ events }: Props) => {
  const renderTableRows = () => {
    return events.map((event, index) => (
      <tr key={`event-${index}`}>
        <td data-column="ID">Event-{index}</td>
        <td data-column="Title">{event.title}</td>
        <td data-column="Organizer">{event.organizer}</td>
        <td data-column="Description">{event.description}</td>
        <td data-column="Date">{event.start.toDateString()}</td>
      </tr>
    ));
  };

  return (
    <table className="events">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Organizer</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{renderTableRows()}</tbody>
    </table>
  );
};

export default EventsTable;
