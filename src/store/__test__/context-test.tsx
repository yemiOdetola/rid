import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { AppContext, AppProvider } from "../context";
import { events as baseEvents } from "../../utils/data";

describe("AppProvider", () => {
  let originalLocalStorage: Storage;

  beforeEach(() => {
    originalLocalStorage = window.localStorage;
    window.localStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    } as any; // Mocking as any to avoid TypeScript error
  });

  afterEach(() => {
    window.localStorage = originalLocalStorage;
  });

  afterEach(() => {
    window.localStorage = originalLocalStorage;
  });

  test("initializes events from localStorage if available", () => {
    const storedEvents = JSON.stringify([
      {
        id: "1",
        title: "Event 1",
        description: "Test event",
        start: new Date(),
        end: new Date(),
        organizer: "Test Organizer",
      },
    ]);
    (window.localStorage.getItem as jest.Mock).mockReturnValueOnce(
      storedEvents
    );

    const TestComponent: React.FC = () => {
      const context = React.useContext(AppContext);
      return <div>{context?.events[0].title}</div>;
    };

    const { getByText } = render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    expect(getByText("Event 1")).toBeInTheDocument();
  });

  test("initializes events from baseEvents if localStorage is empty", () => {
    (window.localStorage.getItem as jest.Mock).mockReturnValueOnce("[]");

    const TestComponent: React.FC = () => {
      const context = React.useContext(AppContext);
      return <div>{context?.events.length}</div>;
    };

    const { getByText } = render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    expect(getByText(`${baseEvents.length}`)).toBeInTheDocument();
  });

  test("creates a new event", () => {
    const newEvent = {
      id: "4",
      title: "New Event",
      description: "Test event",
      start: new Date(),
      end: new Date(),
      organizer: "Test Organizer",
    };

    const TestComponent: React.FC = () => {
      const context = React.useContext(AppContext);
      const { handleCreate } = context || {};

      const handleCreateEvent = () => {
        if (handleCreate) {
          handleCreate(newEvent);
        }
      };

      return (
        <div>
          <button onClick={handleCreateEvent}>Create Event</button>
          <div>{context?.events.length}</div>
        </div>
      );
    };

    const { getByText } = render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    const createButton = getByText("Create Event");
    // const eventCountBefore = getByText(`${baseEvents.length}`);

    act(() => {
      fireEvent.click(createButton);
    });
    const eventCountAfter = getByText(`${baseEvents.length + 1}`);
    expect(eventCountAfter).toBeInTheDocument();
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "events",
      expect.any(String)
    );
  });

  // Add more tests for handleEdit, deleteEvent, and other functionality as needed
});
