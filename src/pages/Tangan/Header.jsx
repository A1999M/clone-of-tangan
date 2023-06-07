import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "../../plugins/CustomEase";
import "./Tangan.scss";

export default function Header() {
  let homeHeaderImageRef = useRef();
  let homeHeaderTitleRef = useRef();
  let homeHeaderTickerRef = useRef();
  let hexArrowRef = useRef();
  let wrapperHeaderRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline();
      tl.fromTo(
        homeHeaderImageRef.current,
        { scale: 1.03, opacity: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "Expo.easeOut",
          delay: 0.5,
        }
      );
      tl.to(
        homeHeaderImageRef.current,
        {
          y: "-70rem",
          duration: 1.4,
          ease: "Expo.easeOut",
        },
        "<.5"
      );
      tl.fromTo(
        homeHeaderTitleRef.current,
        { opacity: 0, clipPath: "inset(0% 0% 100% 0%)", y: 300 },
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          duration: 0.9,
          ease: "Expo.easeOut",
        },
        "<.85"
      );
      tl.to(
        homeHeaderTickerRef.current,
        {
          opacity: 1,
          duration: 0.7,
          ease: "Expo.easeOut",
        },
        "<0"
      );
      tl.to(
        hexArrowRef.current,
        {
          opacity: 1,
          duration: 0.7,
          ease: "Expo.easeOut",
        },
        "<0"
      );
    }, wrapperHeaderRef);

    return () => {
      ctx.revert();
    };
  });

  return (
    <>
      <div className="container_home_header">
        <div ref={wrapperHeaderRef} className="wrapper_home_header">
          <p ref={homeHeaderTitleRef} className="title_home_header">
            TANGAN*
          </p>
          <img
            ref={homeHeaderImageRef}
            className="image_home_header"
            src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/60410425ffe7011d191f5c1e_home__hero--bg.jpg"
            alt="home page header image"
          />
          <p ref={hexArrowRef} className="arrow_hex">
            &#8250;
          </p>
          <div ref={homeHeaderTickerRef} className="home_title_ticker_header">
            <div className="inner_content">
              <span>Physioscan</span>
              <span>Réflexologie plantaire</span>
              <span> Massage Abhyanga</span>
            </div>
            <div className="inner_content2">
              <span>Physioscan</span>
              <span>Réflexologie plantaire</span>
              <span> Massage Abhyanga</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
