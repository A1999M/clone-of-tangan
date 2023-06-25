import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Cursor from "./components/Cursor";
import App from "./App";
import ScrollToTop from "./ScrollToTop";

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Cursor />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
