import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./fonts.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { EveningGuests } from "./EveningGuests.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/evening-guests",
    element: <EveningGuests />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
