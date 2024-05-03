import { render, screen, fireEvent } from "@testing-library/react";
import EventsTable from "../events-table";
import { Event } from "../../utils/data";

// Mock data
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Event 1",
    organizer: "Organizer 1",
    description: "This is the description for Event 1.",
    start: new Date("2023-05-01T10:00:00"),
    end: new Date("2023-05-01T12:00:00"),
  },
  {
    id: "2",
    title: "Event 2",
    organizer: "Organizer 2",
    description: "This is the description for Event 2.",
    start: new Date("2023-05-02T14:00:00"),
    end: new Date("2023-05-02T16:00:00"),
  },
];


const mockViewEvent = jest.fn();

describe("EventsTable", () => {
  it("renders the table with events", () => {
    render(
      <EventsTable
        events={mockEvents}
        viewEvent={mockViewEvent}
        pagination={false}
      />
    );

    // Check if the table headers are rendered
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Organizer")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Duration")).toBeInTheDocument();

    // Check if the event details are rendered
    expect(screen.getByText("Event 1")).toBeInTheDocument();
    expect(screen.getByText("Organizer 1")).toBeInTheDocument();
    expect(
      screen.getByText("This is the description for Event 1.")
    ).toBeInTheDocument();
    expect(screen.getByText("Event 2")).toBeInTheDocument();
    expect(screen.getByText("Organizer 2")).toBeInTheDocument();
    expect(
      screen.getByText("This is the description for Event 2.")
    ).toBeInTheDocument();
  });

  it("renders the pagination controls when pagination is enabled", () => {
    render(
      <EventsTable
        events={mockEvents}
        viewEvent={mockViewEvent}
        pagination={true}
      />
    );

    // Check if the pagination controls are rendered
    expect(screen.getByText("Prev")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("calls viewEvent when an event is clicked", () => {
    render(
      <EventsTable
        events={mockEvents}
        viewEvent={mockViewEvent}
        pagination={false}
      />
    );

    // Click on the first event
    fireEvent.click(screen.getByText("Event 1"));

    // Check if the viewEvent function was called with the correct event
    expect(mockViewEvent).toHaveBeenCalledWith(mockEvents[0]);
  });
});
