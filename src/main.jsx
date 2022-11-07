import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Code from "./Code";
import Commit from "./Commit";
import Directory from "./Directory";
import Progress from "./Progress";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Directory />,
      },

      {
        path: "commit",
        element: <Commit />,
      },

      {
        path: "code",
        element: <Code />,
      },

      {
        path: "progress",
        element: <Progress />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
