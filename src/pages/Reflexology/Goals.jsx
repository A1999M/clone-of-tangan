import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Btn from "../../components/Btn";
import "./Reflexology.scss";

export default function Goals() {
  let scopeRef = useRef(null);
  let borderRightGoalsRef = useRef(null);
  let borderLeftGoalsRef = useRef(null);
  let stickyRef = useRef(null);
  let imagePreventRef = useRef(null);
  let relaxTitleRef = useRef(null);
  let relaxDescRef = useRef(null);
  let relaxBorderRef = useRef(null);
  let clearTitleRef = useRef(null);
  let clearDescRef = useRef(null);
  let clearBorderRef = useRef(null);
  let enableTitleRef = useRef(null);
  let enableDescRef = useRef(null);
  let enableBorderRef = useRef(null);
  let regulateTitleRef = useRef(null);
  let regulateDescRef = useRef(null);
  let regulateBorderRef = useRef(null);
  let preventTitleRef = useRef(null);
  let preventDescRef = useRef(null);
  let preventBorderRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: borderRightGoalsRef.current,
          start: "top 30%",
          id: "borderRight",
          end: "+=1000 10%",
        },
      });
      tl.to(borderRightGoalsRef.current, {
        height: "100vh",
        duration: 1.5,
        ease: "Expo.easeOut",
      });
      tl.to(
        borderLeftGoalsRef.current,
        {
          height: "100vh",
          duration: 1.5,
          ease: "Expo.easeOut",
        },
        "<0.25"
      );

      gsap.to(stickyRef.current, {
        duration: 1,
        scrollTrigger: {
          trigger: stickyRef.current,
          endTrigger: imagePreventRef.current,
          start: "top 0%",
          end: "+=900 100%",
          id: "imagePrevent",
          pin: true,
          pinSpacer: false,
          pinSpacing: false,
        },
      });

      // relax border
      let relaxTl = gsap.timeline({
        scrollTrigger: {
          trigger: relaxTitleRef.current,
          id: "relaxSec",
          start: "center 80%",
          end: "bottom 10%",
        },
      });
      relaxTl.fromTo(
        relaxTitleRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        }
      );
      relaxTl.fromTo(
        relaxDescRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        },
        "<.1"
      );
      relaxTl.to(
        relaxBorderRef.current,
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );

      // clear out border
      let clearTl = gsap.timeline({
        scrollTrigger: {
          trigger: clearTitleRef.current,
          start: "center 80%",
          end: "center 0%",
          id: "clearSec",
        },
      });
      clearTl.fromTo(
        clearTitleRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        }
      );
      clearTl.fromTo(
        clearDescRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        },
        "<.1"
      );
      clearTl.to(
        clearBorderRef.current,
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );

      // enable out border
      let enableTl = gsap.timeline({
        scrollTrigger: {
          trigger: enableTitleRef.current,
          start: "center 80%",
          end: "center 0%",
          id: "enableSec",
        },
      });
      enableTl.fromTo(
        enableTitleRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        }
      );
      enableTl.fromTo(
        enableDescRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        },
        "<.1"
      );
      enableTl.to(
        enableBorderRef.current,
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );

      // regulate out border
      let regulateTl = gsap.timeline({
        scrollTrigger: {
          trigger: regulateTitleRef.current,
          start: "center 80%",
          end: "center 0%",
          id: "regulateSec",
        },
      });
      regulateTl.fromTo(
        regulateTitleRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        }
      );
      regulateTl.fromTo(
        regulateDescRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        },
        "<.1"
      );
      regulateTl.to(
        regulateBorderRef.current,
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );

      // prevent out border
      let preventTl = gsap.timeline({
        scrollTrigger: {
          trigger: preventTitleRef.current,
          start: "center 80%",
          end: "center 0%",
          id: "preventSec",
        },
      });
      preventTl.fromTo(
        preventTitleRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        }
      );
      preventTl.fromTo(
        preventDescRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        },
        "<.1"
      );
      preventTl.to(
        preventBorderRef.current,
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );
      preventTl.to(
        document.querySelector(".image_prevent"),
        {
          scale: 1,
          duration: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "Expo.easeOut",
        },
        "<0.2"
      );
    }, scopeRef);

    return () => {
      ScrollTrigger.getById("borderRight").kill();
      ScrollTrigger.getById("imagePrevent").kill();
      ScrollTrigger.getById("relaxSec").kill();
      ScrollTrigger.getById("clearSec").kill();
      ScrollTrigger.getById("enableSec").kill();
      ScrollTrigger.getById("regulateSec").kill();
      ScrollTrigger.getById("preventSec").kill();
      ctx.revert();
    };
  });

  return (
    <>
      <div ref={scopeRef} className="container-fluid goals">
        <div ref={stickyRef} className="row sticky justify-content-start">
          <div className="col-12 col-lg-5 position-relative">
            <div className="wrapper_goals_title">
              <p className="goals_title">Goals</p>
            </div>
            <div ref={borderRightGoalsRef} className="border_right_goals"></div>
          </div>
          <div className="col-12 col-lg-2 position-relative">
            <div ref={borderLeftGoalsRef} className="border_left_goals"></div>
            <div className="wrapper_btn_goals">
              <Btn
                firstText="makean appointment"
                secondText="take a break"
                borderColor="#000"
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-end p-0">
          <div className="col-12 col-lg-5">
            <div className="border_bottom_goals"></div>
            {/* relax */}
            <div className="wrapper_relax">
              <p ref={relaxTitleRef} className="relax_title">
                Relax
              </p>
              <p ref={relaxDescRef} className="relax_desc">
                RELAX THE BODY AND BRING GENERAL WELL-BEING, <br /> ESPECIALLY
                MENTAL WELL-BEING, THANKS TO MENTAL <br /> RELAXATION AND THE
                EVACUATION OF NEGATIVE EMOTIONS.
              </p>
              <div ref={relaxBorderRef} className="relax_border"></div>
            </div>
            {/* clear out */}
            <div className="wrapper_clear_out">
              <p ref={clearTitleRef} className="clear_title">
                Clear out
              </p>
              <p ref={clearDescRef} className="clear_desc">
                EVACUATE THE STRESS AT THE ORIGIN OF MANY PHYSICAL <br /> AND
                PSYCHIC DYSFUNCTIONS.
              </p>
              <div ref={clearBorderRef} className="clear_border"></div>
            </div>
            {/* Enable  */}
            <div className="wrapper_enable">
              <p ref={enableTitleRef} className="enable_title">
                Enable
              </p>
              <p ref={enableDescRef} className="enable_desc">
                THE TECHNIQUES USED ALLOW FIRST OF ALL TO RELAX THE <br />
                TISSUES AND THEN TO HAVE AN EFFECTIVE DRAINING <br /> ACTION, BY
                DISLODGING THE TOXINS AND ELIMINATING <br /> THEM. ACTIVATING
                AND IMPROVING VENOUS AND LYMPHATIC <br /> CIRCULATION.
              </p>
              <div ref={enableBorderRef} className="enable_border"></div>
            </div>
            {/* regulate */}
            <div className="wrapper_regulate">
              <p ref={regulateTitleRef} className="title_regulate">
                regulate
              </p>
              <p ref={regulateDescRef} className="desc_regulate">
                REGULATE THE CENTRAL NERVOUS SYSTEM WHICH ITSELF <br />{" "}
                INCREASES THE BODY'S SELF-REGULATION PROCESS.
              </p>
              <div ref={regulateBorderRef} className="regulate_border"></div>
            </div>
            {/* prevent  */}
            <div className="wrapper_prevent">
              <p ref={preventTitleRef} className="title_prevent">
                Prevent
              </p>
              <p ref={preventDescRef} className="desc_pevent">
                PREVENT, RELIEVE, EVEN ELIMINATE A LARGE NUMBER OF <br />{" "}
                DISORDERS IN ORDER TO PROMOTE HOMEOSTASIS (STATE OF <br />{" "}
                BALANCE IN THE BODY).
              </p>
              <div ref={preventBorderRef} className="prevent_border"></div>
              <div className="wrapper_image_prevent">
                <img
                  ref={imagePreventRef}
                  src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6040f006134916376bca40b1_reflexologie.jpg"
                  alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6040f006134916376bca40b1_reflexologie.jpg"
                  className="image_prevent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
