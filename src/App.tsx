import React, { Suspense } from "react";
import "./styles/index.scss";
import Loading from "./components/Loading";
import { LayoutContainer } from "./components/layout";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LayoutContainer />
    </Suspense>
  );
}

export default App;
