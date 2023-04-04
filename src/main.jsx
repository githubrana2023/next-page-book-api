import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Books from "./Components/Books/Books";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/books", element: <Books /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
