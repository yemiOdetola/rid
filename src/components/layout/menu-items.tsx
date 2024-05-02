import React from "react";
import { NavLink } from "react-router-dom";

interface MenuItem {
  title: string;
  url: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

interface RenderItemsProps {
  menuItems: MenuItem[];
  className?: string;
  toggleDrawerState?: ((state: boolean) => void) | undefined;
}

export const renderItems = ({
  menuItems,
  className,
  toggleDrawerState,
}: RenderItemsProps) => {
  return (
    <ul className={`menu ${className || ""}`}>
      {menuItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={index}
            onClick={() => toggleDrawerState && toggleDrawerState(false)}
            to={item.url}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <div className="menu-item-content">
              <Icon />
              <span>{item.title}</span>
            </div>
          </NavLink>
        );
      })}
    </ul>
  );
};
