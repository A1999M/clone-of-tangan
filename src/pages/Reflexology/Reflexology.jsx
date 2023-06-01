import React, { useLayoutEffect } from "react";
import NavBar from "../../components/NavBar";
import Header from "./Header";
import Goals from "./Goals";
import MoreAbout from "./MoreAbout";
import Technical from "./Technical";
import { gsap } from "gsap";
import "./Reflexology.scss";
import Footer from "./Footer";

export default function Reflexology() {
  useLayoutEffect(() => {
    gsap.to(document.body, {
      duration: 0.1,
      backgroundColor: "#f5f5f5",
    });
  });

  return (
    <>
      {/* navbar reflexology page */}
      <NavBar />
      {/* header section reflexology page  */}
      <Header />
      {/* goals section reflexology page */}
      <Goals />
      {/* MoreAbout section reflexology page */}
      <MoreAbout />
      {/* Technical section reflexology page */}
      <Technical />
      {/* footer section reflexology page */}
      <Footer />
    </>
  );
}
