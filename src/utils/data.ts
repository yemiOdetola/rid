import {
  Calendar,
  LayoutDashboard,
  LucideRollerCoaster,
  Server,
  Settings2,
  User2,
  WalletCards,
} from "lucide-react";

export interface Event {
  title: string;
  organizer: string;
  description: string;
  start: any;
  end: any;
}

export const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Events",
    url: "/events",
    icon: Calendar,
  },
  {
    title: "Resources",
    url: "/resources",
    icon: LucideRollerCoaster,
  },
  {
    title: "Schedule",
    url: "/schedule",
    icon: WalletCards,
  },
  {
    title: "Placeholder",
    url: "/placeholder",
    icon: Server,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User2,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings2,
  },
];

export const events: Event[] = [
  {
    title: "Lagos tech meetup",
    organizer: "Events brite",
    description:
      "Whether you're a local, new in town or just cruising through we've got loads of great tips and events.",
    start: new Date(2024, 5, 9),
    end: new Date(2024, 5, 10),
  },
  {
    title: "Grass to glory concert",
    organizer: "Dukka Community",
    description:
      "Whether you're a local, new in town or just cruising through we've got loads of great tips and events.",
    start: new Date(2024, 5, 15),
    end: new Date(2024, 5, 18),
  },
  {
    title: "Lagos games week",
    organizer: "Oriental events",
    description:
      "Whether you're a local, new in town or just cruising through we've got loads of great tips and events.",
    start: new Date(2024, 6, 1),
    end: new Date(2024, 6, 10),
  },
  {
    title: "Flutter devs connect",
    organizer: "Events brite",
    description:
      "Whether you're a local, new in town or just cruising through we've got loads of great tips and events.",
    start: new Date(2024, 6, 11),
    end: new Date(2024, 6, 21),
  },
  {
    title: "Founders networking night",
    organizer: "Oriental events",
    description:
      "Whether you're a local, new in town or just cruising through we've got loads of great tips and events.",
    start: new Date(2024, 7, 2),
    end: new Date(2024, 7, 4),
  },
  {
    title: "Lagos games week",
    organizer: "Events brite",
    description:
      "Whether you're a local, new in town or just cruising through we've got loads of great tips and events.",
    start: new Date(2024, 7, 7),
    end: new Date(2024, 7, 8),
  },
];
