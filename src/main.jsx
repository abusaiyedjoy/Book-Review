import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Toaster } from 'react-hot-toast'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./Routers/Routers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster></Toaster>
    <RouterProvider router={router} />
  </React.StrictMode>
);




