import React from "react";
import { Shell } from "lucide-react";
import { menuItems } from "../../utils/data";
import { renderItems } from "./menu-items";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <Shell />
        <span>e-vents</span>
      </div>
      {renderItems({ menuItems })}
    </div>
  );
}
