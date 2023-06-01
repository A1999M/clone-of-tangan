import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Btn from "../../components/Btn";
import "./Reflexology.scss";

export default function Goals() {
  let scopeRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".border_right_goals"),
          start: "top 30%",
          end: "+=1000 10%",
        },
      });

      tl.to(document.querySelector(".border_right_goals"), {
        height: "100vh",
        duration: 1.5,
        ease: "Expo.easeOut",
      });
      tl.to(
        document.querySelector(".border_left_goals"),
        {
          height: "100vh",
          duration: 1.5,
          ease: "Expo.easeOut",
        },
        "<0.25"
      );

      gsap.to(document.querySelector(".sticky"), {
        duration: 1,
        scrollTrigger: {
          trigger: document.querySelector(".sticky"),
          endTrigger: document.querySelector(".image_prevent"),
          start: "top 0%",
          end: "bottom 100%",
          pin: true,
          pinSpacer: false,
          pinSpacing: false,
        },
      });

      // relax border
      let relaxTl = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".relax_title"),
          start: "center 80%",
          end: "bottom 10%",
        },
      });

      relaxTl.fromTo(
        document.querySelector(".relax_title"),
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
        document.querySelector(".relax_desc"),
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
        document.querySelector(".relax_border"),
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
          trigger: document.querySelector(".clear_title"),
          start: "center 80%",
          end: "center 0%",
        },
      });

      clearTl.fromTo(
        document.querySelector(".clear_title"),
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
        document.querySelector(".clear_desc"),
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
        document.querySelector(".clear_border"),
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
          trigger: document.querySelector(".enable_title"),
          start: "center 80%",
          end: "center 0%",
        },
      });
      enableTl.fromTo(
        document.querySelector(".enable_title"),
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
        document.querySelector(".enable_desc"),
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
        document.querySelector(".enable_border"),
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
          trigger: document.querySelector(".title_regulate"),
          start: "center 80%",
          end: "center 0%",
        },
      });
      regulateTl.fromTo(
        document.querySelector(".title_regulate"),
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
        document.querySelector(".desc_regulate"),
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
        document.querySelector(".regulate_border"),
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
          trigger: document.querySelector(".title_prevent"),
          start: "center 80%",
          end: "center 0%",
        },
      });
      preventTl.fromTo(
        document.querySelector(".title_prevent"),
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
        document.querySelector(".desc_pevent"),
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
        document.querySelector(".prevent_border"),
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );
    }, scopeRef);

    return () => ctx.revert();
  });

  return (
    <>
      <div ref={scopeRef} className="container-fluid goals">
        <div className="row sticky justify-content-start">
          <div className="col-12 col-lg-5 position-relative">
            <div className="wrapper_goals_title">
              <p className="goals_title">Goals</p>
            </div>
            <div className="border_right_goals"></div>
          </div>
          <div className="col-12 col-lg-2 position-relative">
            <div className="border_left_goals"></div>
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
              <p className="relax_title">Relax</p>
              <p className="relax_desc">
                RELAX THE BODY AND BRING GENERAL WELL-BEING, <br /> ESPECIALLY
                MENTAL WELL-BEING, THANKS TO MENTAL <br /> RELAXATION AND THE
                EVACUATION OF NEGATIVE EMOTIONS.
              </p>
              <div className="relax_border"></div>
            </div>
            {/* clear out */}
            <div className="wrapper_clear_out">
              <p className="clear_title">Clear out</p>
              <p className="clear_desc">
                EVACUATE THE STRESS AT THE ORIGIN OF MANY PHYSICAL <br /> AND
                PSYCHIC DYSFUNCTIONS.
              </p>
              <div className="clear_border"></div>
            </div>
            {/* Enable  */}
            <div className="wrapper_enable">
              <p className="enable_title">Enable</p>
              <p className="enable_desc">
                THE TECHNIQUES USED ALLOW FIRST OF ALL TO RELAX THE <br />
                TISSUES AND THEN TO HAVE AN EFFECTIVE DRAINING <br /> ACTION, BY
                DISLODGING THE TOXINS AND ELIMINATING <br /> THEM. ACTIVATING
                AND IMPROVING VENOUS AND LYMPHATIC <br /> CIRCULATION.
              </p>
              <div className="enable_border"></div>
            </div>
            {/* regulate */}
            <div className="wrapper_regulate">
              <p className="title_regulate">regulate</p>
              <p className="desc_regulate">
                REGULATE THE CENTRAL NERVOUS SYSTEM WHICH ITSELF <br />{" "}
                INCREASES THE BODY'S SELF-REGULATION PROCESS.
              </p>
              <div className="regulate_border"></div>
            </div>
            {/* prevent  */}
            <div className="wrapper_prevent">
              <p className="title_prevent">Prevent</p>
              <p className="desc_pevent">
                PREVENT, RELIEVE, EVEN ELIMINATE A LARGE NUMBER OF <br />{" "}
                DISORDERS IN ORDER TO PROMOTE HOMEOSTASIS (STATE OF <br />{" "}
                BALANCE IN THE BODY).
              </p>
              <div className="prevent_border"></div>
              <div className="wrapper_image_prevent">
                <img
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
