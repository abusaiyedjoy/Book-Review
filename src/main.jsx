
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./Home/home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Listed_Books from './Home/Listed-Books';
import Pages_to_Read from "./Home/Pages_to_Read";
import Container from './Container/container';
import CardDetails from './Components/cardDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container></Container>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Listed Books",
        element:<Listed_Books></Listed_Books> ,
      },
      {
        path: "/Pages to Read",
        element:<Pages_to_Read></Pages_to_Read> ,
      },
      {
        path: "/card Details/:id",
        element:<CardDetails></CardDetails>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




