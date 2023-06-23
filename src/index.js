import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Cursor from "./components/Cursor";
import App from "./App";
import ScrollToTop from "./ScrollToTop";

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ScrollToTop />
      <Cursor />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
