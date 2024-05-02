import {
  Calendar,
  LayoutDashboard,
  LucideRollerCoaster,
  Server,
  Settings2,
  User2,
  WalletCards,
} from "lucide-react";

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
    url: "profile",
    icon: User2,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings2,
  },
];
