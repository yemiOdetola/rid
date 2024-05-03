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
  id?: number | string;
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
    id: "id74822e792b29a",
    description:
      "Whether you're a local, new in town or just cruising through we've got loads of great tips and events.",
    start: new Date(2024, 4, 2),
    end: new Date(2024, 4, 3),
  },
  {
    title: "Lagos tech meetup",
    organizer: "Events brite",
    id: "id56a609482e777",
    description:
      "Whether you're a local, new in town or just cruising through we've got loads of great tips and events.",
    start: new Date(2024, 5, 9),
    end: new Date(2024, 5, 10),
  },
  {
    title: "Grass to glory concert",
    organizer: "Dukka Community",
    id: "id1eb197f8790b9",
    description:
      "Whether you're a local, new in town or just cruising through we've got loads of great tips and events.",
    start: new Date(2024, 5, 15),
    end: new Date(2024, 5, 18),
  },
  {
    title: "Flutter devs connect",
    organizer: "Events brite",
    id: "idec00dc544f609",
    description:
      "Whether you're a local, new in town or just cruising through we've got loads of great tips and events.",
    start: new Date(2024, 6, 11),
    end: new Date(2024, 6, 21),
  },
  {
    title: "Founders networking night",
    organizer: "Oriental events",
    id: "id0e8dbf1c7546c",
    description:
      "Whether you're a local, new in town or just cruising through we've got loads of great tips and events.",
    start: new Date(2024, 7, 2),
    end: new Date(2024, 7, 4),
  },
];
