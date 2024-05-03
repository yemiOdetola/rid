import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import EventDetails from "../event-details";
import { Event } from "../../utils/data";

const mockEvent: Event = {
  id: "1",
  title: "Event 1",
  description: "This is the description for Event 1",
  start: new Date("2023-05-01T10:00:00"),
  end: new Date("2023-05-01T12:00:00"),
  organizer: "Organizerr tset",
};

const toggleDrawerStateMock = jest.fn();
const editEventMock = jest.fn();
const deleteEventMock = jest.fn();

describe("EventDetails", () => {
  it("renders event details correctly", () => {
    render(
      <EventDetails
        currentEvent={mockEvent}
        toggleDrawerState={toggleDrawerStateMock}
        editEvent={editEventMock}
        deleteEvent={deleteEventMock}
      />
    );
    expect(screen.getByText("Event 1")).toBeInTheDocument();
    expect(
      screen.getByText("This is the description for Event 1")
    ).toBeInTheDocument();
    expect(screen.getByText("Organizerr tset")).toBeInTheDocument();
  });

  
  it("calls deleteEvent when the delete button is clicked", () => {
    render(
      <EventDetails
        currentEvent={mockEvent}
        toggleDrawerState={toggleDrawerStateMock}
        editEvent={editEventMock}
        deleteEvent={deleteEventMock}
      />
    );
    fireEvent.click(screen.getByText("Delete"));
    expect(deleteEventMock).toHaveBeenCalledWith(mockEvent.id);
  });

  it("calls editEvent when the edit button is clicked", () => {
    render(
      <EventDetails
        currentEvent={mockEvent}
        toggleDrawerState={toggleDrawerStateMock}
        editEvent={editEventMock}
        deleteEvent={deleteEventMock}
      />
    );
    fireEvent.click(screen.getByText("Edit"));
    expect(editEventMock).toHaveBeenCalledWith(mockEvent);
  });
});
