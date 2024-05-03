import { formatDate } from "../utils";
import { Event } from "../utils/data";

interface EventDetailsProps {
  currentEvent: Event;
  toggleDrawerState: (state: boolean) => void;
  editEvent: (event: Event) => void;
  deleteEvent: (eventId: any) => void;
}

const EventDetails = ({
  currentEvent,
  editEvent,
  deleteEvent,
}: EventDetailsProps) => {
  return (
    <div className="open-event">
      <h3 className="title">Event Details</h3>
      {currentEvent && currentEvent.title ? (
        <div className="open-event-details">
          <div className="key-value">
            <div className="key">Event title</div>
            <div className="value">{currentEvent.title}</div>
          </div>
          <div className="key-value">
            <div className="key">Event description</div>
            <div className="value">{currentEvent.description}</div>
          </div>
          <div className="key-value">
            <div className="key">Starts</div>
            <div className="value">{formatDate(currentEvent.start)}</div>
          </div>
          <div className="key-value">
            <div className="key">Ends</div>
            <div className="value">{formatDate(currentEvent.end)}</div>
          </div>
          <div className="key-value">
            <div className="key">Organized by</div>
            <div className="value">{currentEvent.organizer}</div>
          </div>
          <div className="actions">
            <button
              className="delete"
              onClick={() => currentEvent && deleteEvent(currentEvent?.id)}
            >
              Delete
            </button>
            <button className="edit" onClick={() => editEvent(currentEvent)}>
              Edit
            </button>
          </div>
        </div>
      ) : (
        <h1>Please wait...</h1>
      )}
    </div>
  );
};

export default EventDetails;
