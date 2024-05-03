export interface AppState {
  events: Event[];
  selectedEvent: Event | null;
  isEditing: boolean;
  isCreating: boolean;
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  setSelectedEvent: React.Dispatch<React.SetStateAction<Event | null>>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCreating: React.Dispatch<React.SetStateAction<boolean>>;
}
