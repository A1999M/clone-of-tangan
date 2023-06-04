import React from "react";
import NavBar from "../../components/NavBar";
import Header from "./Header";
import GoalsPhysio from "./GoalsPhysio";
import TakeCare from "./TakeCare";
import TechnicalPhysio from "./TechnicalPhysio";
import "./Physioscan.scss";

export default function Physioscan() {
  return (
    <>
      {/* navbar  */}
      <NavBar />
      {/* header */}
      <Header />
      {/* GoalsPhysio */}
      <GoalsPhysio />
      {/* TakeCare */}
      <TakeCare />
      {/* Technical */}
      <TechnicalPhysio />
    </>
  );
}
