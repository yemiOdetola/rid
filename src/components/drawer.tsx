import React, { ReactNode } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: "left" | "right";
}

const Drawer = ({
  isOpen,
  onClose,
  children,
  position = "left",
}: DrawerProps) => {
  return (
    <>
      <div
        className={`drawer-overlay ${isOpen && "drawer-overlay--open"}`}
        onClick={onClose}
      />
      <div
        className={`drawer ${isOpen && "drawer--open"} ${
          position === "left" && "drawer--left"
        } ${position === "right" && "drawer--right"}`}
      >
        {children}
      </div>
    </>
  );
};

export default Drawer;
