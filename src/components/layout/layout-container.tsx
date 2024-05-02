import React from "react";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Header from "./header";

const LayoutContainer = (props: any) => {
  const { title, children } = props;
  return (
    <div>
      <Sidebar />
      <div className="layout-container">
        <Header title={title} />
        <div className="content-container">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutContainer;
