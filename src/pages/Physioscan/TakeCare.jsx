import React, { useEffect } from "react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import "./Physioscan.scss";

export default function TakeCare() {
  let scopeRef = useRef();
  let bigImageRef = useRef();
  let bigTitleRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let hiddenGoals = () => {
        gsap.to(document.querySelector(".GoalsPhysio"), {
          opacity: 0,
          duration: 0.3,
        });
        gsap.to(scopeRef.current, {
          visibility: "visible",
          duration: 0.1,
        });
      };
      let showGoals = () => {
        gsap.to(document.querySelector(".GoalsPhysio"), {
          opacity: 1,
          visibility: "visible",
          duration: 0.3,
        });
        gsap.to(scopeRef.current, {
          visibility: "hidden",
          duration: 0.1,
        });
      };

      gsap.registerPlugin(ScrollTrigger);
      gsap.to(document.body, {
        duration: 0.2,
        backgroundColor: "#000",
        scrollTrigger: {
          trigger: scopeRef.current,
          endTrigger: bigImageRef.current,
          start: "top 22%",
          end: "bottom 0%",
          onEnter: hiddenGoals,
          onEnterBack: hiddenGoals,
          onLeave: showGoals,
          onLeaveBack: showGoals,
          toggleActions: "restart reverse restart reverse",
          id: "bodyChangeColor",
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
    }, scopeRef);

    return () => {
      ScrollTrigger.getById("bodyChangeColor").kill();
      ctx.revert();
    };
  });

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        bigTitleRef.current,
        { x: "65rem" },
        {
          duration: 30,
          x: "-30rem",
          scrollTrigger: {
            trigger: bigTitleRef.current,
            start: "top 100%",
            end: "bottom 0%",
            scrub: 10,
            id: "bigTitleTrigger",
          },
        }
      );
      gsap.to(bigImageRef.current, {
        opacity: 1,
        duration: 1,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: bigImageRef.current,
          start: "+=250 70%",
          end: "bottom 0%",
          toggleActions: "restart reverse restart reverse",
          id: "bigImageTrigger",
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
    }, scopeRef);

    return () => {
      ScrollTrigger.getById("bigTitleTrigger").kill();
      ScrollTrigger.getById("bigImageTrigger").kill();
      ctx.revert();
    };
  });

  return (
    <>
      <div ref={scopeRef} className="container-fluid takeCare">
        <div className="row">
          <div className="col-12">
            <div className="wrapper_big_image">
              <img
                ref={bigImageRef}
                className="big_image"
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6042232983a6c94ed2016f2f_bg_take-care.jpg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6042232983a6c94ed2016f2f_bg_take-care.jpg"
              />
              <p ref={bigTitleRef} className="big_title">
                take care
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
