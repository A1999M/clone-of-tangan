// import Tangan from "./pages/Tangan";
import Reflexology from "./pages/Reflexology";
import Physioscan from "./pages/Physioscan";
import { Routes, Route } from "react-router-dom";
import "./components/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Reflexology />} />
        <Route path="/physioscan" element={<Physioscan />} />
        {/* <Route path="/tangan" element={<Tangan />} /> */}
      </Routes>
    </>
  );
}
