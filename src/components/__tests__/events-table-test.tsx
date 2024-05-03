import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EventsTable from "../events-table";
import { Event } from "../../utils/data";

// Mock data
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Event 1",
    description: "This is the description for Event 1",
    start: new Date("2023-05-01T10:00:00"),
    end: new Date("2023-05-01T12:00:00"),
    organizer: "Organizer 1",
  },
  {
    id: "2",
    title: "Event 2",
    description: "This is the description for Event 2",
    start: new Date("2023-05-02T14:00:00"),
    end: new Date("2023-05-02T16:00:00"),
    organizer: "Organizer 2",
  },
];

const viewEventMock = jest.fn();

describe("EventsTable", () => {
  it("renders the table with events", () => {
    render(
      <EventsTable
        events={mockEvents}
        viewEvent={viewEventMock}
        pagination={false}
      />
    );
    expect(screen.getByText("Event 1")).toBeInTheDocument();
    expect(screen.getByText("Event 2")).toBeInTheDocument();
  });

  it("renders the correct pagination controls when pagination is enabled", () => {
    render(
      <EventsTable
        events={mockEvents}
        viewEvent={viewEventMock}
        pagination={true}
      />
    );
    expect(screen.getByText("Prev")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("calls viewEvent when an event is clicked", () => {
    render(
      <EventsTable
        events={mockEvents}
        viewEvent={viewEventMock}
        pagination={false}
      />
    );
    fireEvent.click(screen.getByText("Event 1"));
    expect(viewEventMock).toHaveBeenCalledWith(mockEvents[0]);
  });

  it("renders a message when there are no events", () => {
    render(
      <EventsTable events={[]} viewEvent={viewEventMock} pagination={false} />
    );
    expect(screen.getByText("No events")).toBeInTheDocument();
  });
});
