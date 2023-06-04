import Btn from "../../components/Btn";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./Physioscan.scss";

export default function GoalsPhysio() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".border_left_goalsphysio"),
          start: "top 30%",
          end: "top 0%",
        },
      });
      tl.to(document.querySelector(".border_left_goalsphysio"), {
        height: "115vh",
        duration: 2,
        ease: "Expo.easeOut",
      });
      tl.to(
        document.querySelector(".border_right_goalsphysio"),
        {
          height: "115vh",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.15"
      );

      gsap.fromTo(
        document.querySelector(".title_goalsPhysio"),
        { y: -120 },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: document.querySelector(".title_goalsPhysio"),
            start: "top 20%",
            end: "bottom 0%",
          },
        }
      );
      gsap.to(document.querySelector(".sticky_GoalsPhysio"), {
        duration: 1,
        scrollTrigger: {
          trigger: document.querySelector(".sticky_GoalsPhysio"),
          endTrigger: document.querySelector(".image_Reinform"),
          start: "top 0%",
          end: "bottom 100%",
          pin: true,
          pinSpacer: false,
          pinSpacing: false,
        },
      });

      // animate borders

      // scan border
      let scanTl = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".scan_title"),
          start: "center 80%",
          end: "bottom 10%",
        },
      });
      scanTl.fromTo(
        document.querySelector(".scan_title"),
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        }
      );
      scanTl.fromTo(
        document.querySelector(".scan_desc"),
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
      scanTl.to(
        document.querySelector(".scan_border"),
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );

      // scan border
      let targetTl = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".Target_title"),
          start: "center 80%",
          end: "bottom 10%",
        },
      });
      targetTl.fromTo(
        document.querySelector(".Target_title"),
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        }
      );
      targetTl.fromTo(
        document.querySelector(".Target_desc"),
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
      targetTl.to(
        document.querySelector(".Target_border"),
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );

      // scan border
      let rebalanceTl = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".Rebalance_title"),
          start: "center 80%",
          end: "bottom 10%",
        },
      });
      rebalanceTl.fromTo(
        document.querySelector(".Rebalance_title"),
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        }
      );
      rebalanceTl.fromTo(
        document.querySelector(".Rebalance_desc"),
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
      rebalanceTl.to(
        document.querySelector(".Rebalance_border"),
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );

      // scan border
      let reinformTl = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".Reinform_title"),
          start: "center 80%",
          end: "bottom 10%",
        },
      });
      reinformTl.fromTo(
        document.querySelector(".Reinform_title"),
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        }
      );
      reinformTl.fromTo(
        document.querySelector(".Reinform_desc"),
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
      reinformTl.to(
        document.querySelector(".Reinform_border"),
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );
      reinformTl.to(
        document.querySelector(".image_Reinform"),
        {
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );
    }, document.querySelector(".GoalsPhysio"));

    return () => ctx.revert();
  });

  return (
    <>
      <div className="contianer-fluid GoalsPhysio">
        <div className="row sticky_GoalsPhysio justify-content-start">
          <div className="col-12 col-lg-5 position-relative">
            <div className="wrapper_title_goalsphysio">
              <p className="title_goalsPhysio">Goals</p>
            </div>
            <div className="border_left_goalsphysio"></div>
          </div>
          <div className="col-12 col-lg-2 position-relative">
            <div className="border_right_goalsphysio"></div>
            <div className="wrapper_btn_GoalsPhysio">
              <Btn
                firstText="makean appointment"
                secondText="take a break"
                borderColor="#000"
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-12 col-lg-5">
            {/* to scan  */}
            <div className="wrapper_scan">
              <p className="scan_title">To scan</p>
              <p className="scan_desc">
                THE PHYSIOSCAN MAKES IT POSSIBLE TO CARRY OUT A RAPID AND
                PRECISE ASSESSMENT OF THE ENERGY LEVEL OF THE VARIOUS SYSTEMS
                WHICH DETERMINE THE BALANCE OF THE INDIVIDUAL.
              </p>
              <div className="scan_border"></div>
            </div>
            {/* Target  */}
            <div className="wrapper_Target">
              <p className="Target_title">Target</p>
              <p className="Target_desc">
                BY READING VIBRATORY INFORMATION, THE PHYSIOSCAN MAKES IT
                POSSIBLE TO CARRY OUT AN ENERGY AND INFORMATIONAL ANALYSIS IN
                ORDER TO IDENTIFY OR CONFIRM A PERCEIVED IMBALANCE.
              </p>
              <div className="Target_border"></div>
            </div>
            {/* Rebalance  */}
            <div className="wrapper_Rebalance">
              <p className="Rebalance_title">Rebalance</p>
              <p className="Rebalance_desc">
                THE PHYSIOSCAN MAKES IT POSSIBLE TO HARMONIZE WELL-BEING BY
                FREQUENCY RE-INFORMATION, CALLED "META-RESONANCE" OR
                "META-THERAPY".
              </p>
              <div className="Rebalance_border"></div>
            </div>
            {/* Reinform  */}
            <div className="wrapper_Reinform">
              <p className="Reinform_title">Reinform</p>
              <p className="Reinform_desc">
                MANY HARMONIZING FREQUENCIES ARE OFFERED BY THE PHYSIOSCAN, FROM
                HERBAL MEDICINE, HOMEOPATHY, PHYSIOLOGY, BIOENERGY. BY SENDING
                THE OPTIMALLY ADAPTED FREQUENCIES TO DIFFERENT AREAS OF THE BODY
                (CELLS, TISSUES, ORGANS) YOU CONTRIBUTE TO THE RESTORATION OF
                GENERAL HOMEOSTASIS.
              </p>
              <div className="Reinform_border"></div>
              <div className="wrapper_image_Reinform">
                <img
                  className="image_Reinform"
                  src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/604223488bf2e87510398bb4_physioscan__01.jpg"
                  alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/604223488bf2e87510398bb4_physioscan__01.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
