import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EventDetails from "../event-details";
import { Event } from "../../utils/data";


const mockEvent: Event = {
  id: "1",
  title: "Event 1",
  organizer: "Organizer 1",
  description: "This is the description for Event 1.",
  start: new Date("2023-05-01T10:00:00"),
  end: new Date("2023-05-01T12:00:00"),
};


const mockToggleDrawerState = jest.fn();
const mockEditEvent = jest.fn();
const mockDeleteEvent = jest.fn();

describe("EventDetails", () => {
  it("renders event details", () => {
    render(
      <EventDetails
        currentEvent={mockEvent}
        toggleDrawerState={mockToggleDrawerState}
        editEvent={mockEditEvent}
        deleteEvent={mockDeleteEvent}
      />
    );

    // Check if the event details are rendered
    expect(screen.getByText("Event title")).toBeInTheDocument();
    expect(screen.getByText("Event 1")).toBeInTheDocument();
    expect(screen.getByText("Event description")).toBeInTheDocument();
    expect(
      screen.getByText("This is the description for Event 1.")
    ).toBeInTheDocument();
    expect(screen.getByText("Starts")).toBeInTheDocument();
    expect(screen.getByText("Ends")).toBeInTheDocument();
    expect(screen.getByText("Organized by")).toBeInTheDocument();
    expect(screen.getByText("Organizer 1")).toBeInTheDocument();
  });

  it("calls deleteEvent when the Delete button is clicked", () => {
    render(
      <EventDetails
        currentEvent={mockEvent}
        toggleDrawerState={mockToggleDrawerState}
        editEvent={mockEditEvent}
        deleteEvent={mockDeleteEvent}
      />
    );

    // Click on the Delete button
    fireEvent.click(screen.getByText("Delete"));

    // Check if the deleteEvent function was called with the correct event ID
    expect(mockDeleteEvent).toHaveBeenCalledWith(mockEvent.id);
  });

  it("calls editEvent when the Edit button is clicked", () => {
    render(
      <EventDetails
        currentEvent={mockEvent}
        toggleDrawerState={mockToggleDrawerState}
        editEvent={mockEditEvent}
        deleteEvent={mockDeleteEvent}
      />
    );

    // Click on the Edit button
    fireEvent.click(screen.getByText("Edit"));

    // Check if the editEvent function was called with the correct event
    expect(mockEditEvent).toHaveBeenCalledWith(mockEvent);
  });
});
