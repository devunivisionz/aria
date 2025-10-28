import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Shell from "./shell/Shell";
import Wizard from "./pages/Wizard";
import Prospects from "./pages/Prospects";
import Tracked from "./pages/Tracked";
import Intros from "./pages/Intros";
import Reports from "./pages/Reports";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Shell />,
    children: [
      { index: true, element: <Prospects /> },
      { path: "wizard", element: <Wizard /> },
      { path: "tracked", element: <Tracked /> },
      { path: "intros", element: <Intros /> },
      { path: "reports", element: <Reports /> },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
