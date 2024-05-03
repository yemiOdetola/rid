import React, { useEffect, useId, useState } from "react";
import { DateTime } from "luxon";
import { Event } from "../../utils/data";

interface EventFormProps {
  // event: Event;
  event: Event | null;
  onSave: (event: Event) => void;
  onCancel: () => void;
}

const defaultEvent: Event = {
  id: "",
  title: "",
  description: "",
  start: new Date(),
  end: new Date(),
  organizer: "",
};

export default function EditEvent({
  event: initialEvent,
  onSave,
  onCancel,
}: EventFormProps) {
  const isCreateMode = !defaultEvent?.id;
  const [event, setEvent] = useState<Event>(initialEvent || defaultEvent);

  useEffect(() => {
    if (initialEvent) {
      setEvent({
        ...initialEvent,
        start: DateTime.fromJSDate(initialEvent.start).toJSDate(),
        end: DateTime.fromJSDate(initialEvent.end).toJSDate(),
      });
    } else {
      setEvent(defaultEvent);
    }
  }, [initialEvent]);

  const handleChange = (prop: keyof Event, value: string | Date) => {
    setEvent((prevEvent) => ({
      ...prevEvent,
      [prop]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(event);
  };

  return (
    <div className="edit-event">
      <h3 className="title">{isCreateMode ? "Create Event" : "Edit Event"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Event title:</label>
          <input
            type="text"
            value={event.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
        <div className="field">
          <label>Starts:</label>
          <input
            type="date"
            value={event.start ? event.start.toISOString().split("T")[0] : ""}
            onChange={(e) => handleChange("start", new Date(e.target.value))}
          />
        </div>
        <div className="field">
          <label>Ends:</label>
          <input
            type="date"
            value={event.end ? event.end.toISOString().split("T")[0] : ""}
            onChange={(e) => handleChange("end", new Date(e.target.value))}
          />
        </div>

        <div className="field">
          <label>Event description:</label>
          <textarea
            value={event.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
        <div className="field">
          <label>Organized by:</label>
          <input
            type="text"
            value={event.organizer}
            onChange={(e) => handleChange("organizer", e.target.value)}
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
