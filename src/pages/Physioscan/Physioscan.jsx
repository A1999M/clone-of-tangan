import NavBar from "../../components/NavBar";
import Header from "./Header";
import GoalsPhysio from "./GoalsPhysio";
import TakeCare from "./TakeCare";
import TechnicalPhysio from "./TechnicalPhysio";
import FooterPhysio from "./FooterPhysio";
import "./Physioscan.scss";
import { useEffect } from "react";

export default function Physioscan() {
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  });

  return (
    <>
      {/* NavBar */}
      <NavBar />
      {/* header */}
      <Header />
      {/* GoalsPhysio */}
      <GoalsPhysio />
      {/* TakeCare */}
      <TakeCare />
      {/* Technical */}
      <TechnicalPhysio />
      {/* FooterPhysio */}
      <FooterPhysio />
    </>
  );
}
