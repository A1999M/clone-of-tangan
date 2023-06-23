import { useEffect, useLayoutEffect } from "react";
import NavBar from "../../components/NavBar";
import Header from "./Header";
import StopBreath from "./StopBreath";
import ImagesSection from "./ImagesSection";
import Techniques from "./Techniques";
import MyPatients from "./MyPatients";
import BetterHealth from "./BetterHealth";
import { gsap } from "gsap";
import "./Tangan.scss";

export default function Tangan() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  });

  useLayoutEffect(() => {
    gsap.set(document.body, {
      backgroundColor: "#f5f5f5",
    });
  });

  return (
    <>
      {/* NavBar home page */}
      <NavBar />
      {/* header home page */}
      <Header />
      {/* stop breath home page */}
      <StopBreath />
      {/* images section  home page */}
      <ImagesSection />
      {/* Techniques section home page */}
      <Techniques />
      {/* better health section home page */}
      <BetterHealth />
    </>
  );
}
