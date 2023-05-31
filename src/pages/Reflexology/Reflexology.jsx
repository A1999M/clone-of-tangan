import React from "react";
import NavBar from "../../components/NavBar";
import Header from "./Header";
import Goals from "./Goals";
import "./Reflexology.scss";

export default function Reflexology() {
  return (
    <>
      {/* navbar reflexology page */}
      <NavBar />
      {/* header section reflexology page  */}
      <Header />
      {/* goals section reflexology page */}
      <Goals />
    </>
  );
}
