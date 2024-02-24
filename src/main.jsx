import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Inicio from "./pages/Inicio.jsx";
import Upg from "./pages/Upg.jsx";
import MyD from "./pages/MyD.jsx";
import Programa from "./pages/Programa.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio></Inicio>,
  },
  {
    path: "/upg",
    element: <Upg></Upg>,
  },
  {
    path: "/myd",
    element: <MyD></MyD>,
  },
  {
    path: "/programa",
    element: <Programa></Programa>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
