import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./components/App.scss";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
