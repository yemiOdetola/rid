import { useState } from "react";
import { Event } from "../utils/data";
import { CloudSnow } from "lucide-react";

interface Props {
  events: Event[];
  pagination: boolean;
  viewEvent: (event: Event) => void;
}

const EventsTable = ({ events, viewEvent, pagination }: Props) => {
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);

  const renderTableRows = () => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, events.length);

    return events
      .slice(startIndex, endIndex)
      .map((event, index) => (
        <tr key={`event-${index}`}>
          <td
            className="underline"
            data-column="ID"
            onClick={() => viewEvent(event)}
          >
            e-{event.id}
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

  const renderPagination = () => {
    const totalPages = Math.ceil(events.length / pageSize);
    return (
      <div className="prev-next">
        <button
          className="prev"
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <button
          className="next"
          onClick={() =>
            setPage((prevPage) => Math.min(prevPage + 1, totalPages))
          }
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    );
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
    <>
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
      {pagination ? renderPagination() : null}
    </>
  );
};

export default EventsTable;
