import { useState } from "react";
import { Menu, Shell, User2 } from "lucide-react";
import Drawer from "../drawer";
import { menuItems } from "../../utils/data";
import { renderItems } from "./menu-items";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const [drawerState, toggleDrawerState] = useState<boolean>(false);
  // const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <>
      <div className="mobile-header">
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
              {/* <div className="logo">
                  <Shell />
                  <span>e-vents</span>
                </div> */}
            </div>
          </div>
          {renderItems({ menuItems, toggleDrawerState })}
        </Drawer>
      </div>
      <header className="header-container">
        <span className="title">{title || "Events assessment"}</span>
        <div className="menu-section">
          <button className="notification">
            <User2 />
          </button>
        </div>
      </header>
    </>
  );
}
