import Tangan from "./pages/Tangan/Tangan";
import Reflexology from "./pages/Reflexology";
import Physioscan from "./pages/Physioscan";
import { Route, Routes, useLocation } from "react-router-dom";
import { BubblyContainer } from "react-bubbly-transitions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/App.scss";

export default function App() {
  let location = useLocation();

  return (
    <>
      <BubblyContainer />
      <Routes location={location}>
        <Route path="/" element={<Reflexology />} />
        <Route path="/physioscan" element={<Physioscan />} />
        <Route path="/tangan" element={<Tangan />} />
      </Routes>
    </>
  );
}
