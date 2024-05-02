import React, { useRef, useState } from "react";
import { Bell, Menu, Shell } from "lucide-react";
import Drawer from "../drawer";
import { menuItems } from "../../utils/data";
import { renderItems } from "./menu-items";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const [drawerState, toggleDrawerState] = useState<boolean>(false);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <>
      {windowSize?.current[0] < 992 ? (
        <>
          <div className="mobile-top-bar">
            <div className="logo">
              <div className="logo">
                <Shell />
                <span>e-vents</span>
              </div>
            </div>
            <button className="menu" onClick={() => toggleDrawerState(true)}>
              <Menu />
            </button>
          </div>
          <Drawer
            isOpen={drawerState}
            onClose={() => toggleDrawerState(false)}
            position="left"
          >
            <div className="drawer-logo">
              <div className="logo">
                <div className="logo">
                  <Shell />
                  <span>e-vents</span>
                </div>
              </div>
            </div>
            {renderItems({ menuItems, toggleDrawerState })}
          </Drawer>
        </>
      ) : null}
      <header className="header-container">
        <span className="title">{title || "n/A"}</span>
        <div className="menu-section">
          <button className="notification">
            <Bell />
          </button>
        </div>
      </header>
    </>
  );
}
