import React, { Suspense } from "react";
import "./styles/index.scss";
import Loading from "./components/Loading";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard, Events } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/profile",
    element: <Dashboard />,
  },
  {
    path: "/resources",
    element: <Dashboard />,
  },
  {
    path: "/schedule",
    element: <Dashboard />,
  },
  {
    path: "/placeholder",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Dashboard />,
  },
  {
    path: "/settings",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
