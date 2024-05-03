import React, { useId, useState } from "react";
import { DateTime } from "luxon";
import { Event } from "../../utils/data";

interface EventFormProps {
  // event: Event;
  event: Event;
  onSave: (event: Event) => void;
  onCancel: () => void;
}
export default function EditEvent({ event, onSave, onCancel }: EventFormProps) {
  const isCreateMode = !event.id;
  const newId = useId();
  const defaultStart = DateTime.fromJSDate(
    event.start || new Date()
  ).toISODate();
  const defaultEnd = DateTime.fromJSDate(event.end || new Date()).toISODate();
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const [start, setStart] = useState<any>(defaultStart);
  const [end, setEnd] = useState<any>(defaultEnd);
  const [organizer, setOrganizer] = useState(event.organizer);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...event,
      id: newId,
      title,
      description,
      start: DateTime.fromISO(start).toJSDate(),
      end: DateTime.fromISO(end).toJSDate(),
      organizer,
    });
  };

  if (!event || !event.title) {
    return null;
  }

  return (
    <div className="edit-event">
      <h2>{isCreateMode ? "Create Event" : "Edit Event"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Event title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Starts:</label>
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Ends:</label>
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Event description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Organized by:</label>
          <input
            type="text"
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
          />
        </div>
        <div className="actions">
          <button type="submit" className="save">
            {isCreateMode ? "Create" : "Save"}
          </button>
          <button type="button" className="cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
