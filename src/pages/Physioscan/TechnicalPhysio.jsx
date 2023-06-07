import React, { useEffect, useRef } from "react";
import Btn from "../../components/Btn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./Physioscan.scss";

export default function TechnicalPhysio() {
  let TechnicalPhysioRef = useRef(null);
  let borderLeftRef = useRef(null);
  let borderRightRef = useRef(null);
  let titleRef = useRef(null);
  let stickyRef = useRef(null);
  let imageInvestigateRef = useRef(null);
  let imageVibrationRef = useRef(null);

  let physioquantaTitleRef = useRef(null);
  let physioquantaDescRef = useRef(null);
  let physioquantaBorderRef = useRef(null);

  let VibrationTitleRef = useRef(null);
  let VibrationDescRef = useRef(null);
  let VibrationBorderRef = useRef(null);

  let energyTitleRef = useRef(null);
  let energyDescRef = useRef(null);
  let energyBorderRef = useRef(null);

  let InvestigateTitleRef = useRef(null);
  let InvestigateDescRef = useRef(null);
  let InvestigateBorderRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: borderLeftRef.current,
          start: "top 0%",
          end: "top 0%",
          id: "borderLeftTrigger",
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      tl.to(borderLeftRef.current, {
        height: "100vh",
        duration: 2,
        delay: 0.2,
        ease: "Expo.easeOut",
      });
      tl.to(
        borderRightRef.current,
        {
          height: "100vh",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.15"
      );

      gsap.fromTo(
        titleRef.current,
        { y: -120 },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 20%",
            end: "bottom 0%",
            id: "titleTrigger",
          },
        }
      );
      gsap.to(stickyRef.current, {
        duration: 1,
        scrollTrigger: {
          trigger: stickyRef.current,
          endTrigger: imageInvestigateRef.current,
          start: "top 0%",
          end: "center 65%",
          id: "stickyTrigger",
          pin: true,
          pinSpacer: false,
          pinSpacing: false,
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });

      // animate borders

      // Physioquanta border
      let PhysioquantaTl = gsap.timeline({
        scrollTrigger: {
          trigger: physioquantaTitleRef.current,
          start: "center 70%",
          end: "bottom 10%",
          id: "PhysioquantaTrigger",
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      PhysioquantaTl.fromTo(
        physioquantaTitleRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        }
      );
      PhysioquantaTl.fromTo(
        physioquantaDescRef.current,
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
      PhysioquantaTl.to(
        physioquantaBorderRef.current,
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );

      // Vibration border
      let VibrationTl = gsap.timeline({
        scrollTrigger: {
          trigger: VibrationTitleRef.current,
          start: "center 70%",
          end: "bottom 10%",
          id: "VibrationTrigger",
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      VibrationTl.fromTo(
        VibrationTitleRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        }
      );
      VibrationTl.fromTo(
        VibrationDescRef.current,
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
      VibrationTl.to(
        VibrationBorderRef.current,
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );

      // Energy border
      let EnergyTl = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".Energy_title"),
          start: "center 75%",
          end: "bottom 10%",
          id: "EnergyTrigger",
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      EnergyTl.fromTo(
        energyTitleRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        }
      );
      EnergyTl.fromTo(
        energyDescRef.current,
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
      EnergyTl.to(
        energyBorderRef.current,
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );

      // Investigate border
      let InvestigateTl = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".Investigate_title"),
          start: "center 70%",
          end: "bottom 10%",
          id: "InvestigateTrigger",
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      InvestigateTl.fromTo(
        InvestigateTitleRef.current,
        { opacity: 0, y: 80, clipPath: "inset(0% 0% 100% 0%)" },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "Expo.easeOut",
          duration: 1,
        }
      );
      InvestigateTl.fromTo(
        InvestigateDescRef.current,
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
      InvestigateTl.to(
        InvestigateBorderRef.current,
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );

      gsap.fromTo(
        imageVibrationRef.current,
        { scale: 1.5, clipPath: "inset(0% 0% 100% 0%)" },
        {
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: imageVibrationRef.current,
            start: "center 85%",
            end: "bottom 0%",
            id: "imageVibration",
            // markers: {
            //   startColor: "#ffd700",
            //   endColor: "#ff0000",
            //   fontSize: "20px",
            // },
          },
        }
      );
    }, TechnicalPhysioRef);

    return () => {
      ScrollTrigger.getById("borderLeftTrigger").kill();
      ScrollTrigger.getById("titleTrigger").kill();
      ScrollTrigger.getById("stickyTrigger").kill();
      ScrollTrigger.getById("PhysioquantaTrigger").kill();
      ScrollTrigger.getById("VibrationTrigger").kill();
      ScrollTrigger.getById("EnergyTrigger").kill();
      ScrollTrigger.getById("InvestigateTrigger").kill();
      ScrollTrigger.getById("imageVibration").kill();
      ctx.revert();
    };
  });

  return (
    <>
      <div
        ref={TechnicalPhysioRef}
        className="contianer-fluid TechnicalPhysio position-relative"
      >
        <div
          ref={stickyRef}
          className="row sticky_TechnicalPhysio justify-content-start"
        >
          <div className="col-12 col-lg-5 position-relative">
            <div className="wrapper_title_TechnicalPhysio">
              <p ref={titleRef} className="title_TechnicalPhysio">
                Technical
              </p>
            </div>
            <div
              ref={borderLeftRef}
              className="border_left_TechnicalPhysio"
            ></div>
          </div>
          <div className="col-12 col-lg-2 position-relative">
            <div
              ref={borderRightRef}
              className="border_right_TechnicalPhysioo"
            ></div>
            <div className="wrapper_btn_TechnicalPhysio">
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
            {/* Physioquantato scan  */}
            <div className="wrapper_Physioquanta">
              <p ref={physioquantaTitleRef} className="Physioquanta_title">
                Physioquanta
              </p>
              <p ref={physioquantaDescRef} className="Physioquanta_desc">
                DISCOVER THE REFERENCE SITE ON THE PHYSIOSCAN
                PHYSIOQUANTA.COM/PHYSIOSCAN
              </p>
              <div
                ref={physioquantaBorderRef}
                className="Physioquanta_border"
              ></div>
            </div>
            {/* Vibration  */}
            <div className="wrapper_Vibration">
              <p ref={VibrationTitleRef} className="Vibration_title">
                Vibration frequencies
              </p>
              <p ref={VibrationDescRef} className="Vibration_desc">
                <span>
                  THIS PRINCIPLE IS BASED ON THE ASSUMPTION THAT ALL ORGANS HAVE
                  CHARACTERISTIC VIBRATIONAL FREQUENCIES WHEN THEY ARE HEALTHY
                  AND THAT DISEASE IS THE BODY'S NATURAL RESPONSE TO STRESS. THE
                  LATTER LEADS TO A CHANGE IN THE FREQUENCY OF ENERGY WHICH
                  AFFECTS THE STATE OF HEALTH OF AN ORGAN AND MODIFIES ITS
                  VIBRATIONAL STATE.
                </span>
                <span>
                  The change in the function of an organ is caused by the
                  increase or decrease of these vibrations caused by a chemical,
                  mechanical or thermal element exerting a tension. The system
                  compares its measurement to a database and evaluates the state
                  of stress, the system, the organ, the tissue or the cell
                  evaluated.
                </span>
                <span>
                  The Physioscan is a decoder-analyzer that assesses the
                  functional level of each organ and each tissue of the human
                  body. Its operation is based on bio-feedback of cellular
                  information. It gives the state of tension of an organ or a
                  tissue as well as the pathological risks. Indeed, any
                  physiological dysfunction results in a frequency modification
                  of the electromagnetic fields emitted by the organs involved.
                </span>
                <span>
                  A dynamic graph also presents the quality of the information
                  exchanged between the organ (or the analyzed tissue) and its
                  environment.
                </span>
              </p>
              <div className="wrapper_image_Vibration">
                <img
                  ref={imageVibrationRef}
                  className="Vibration_image"
                  src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6042235f79a7104cc84ed500_physioscan_02-p-800.jpeg"
                  alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6042235f79a7104cc84ed500_physioscan_02-p-800.jpeg"
                />
              </div>
              <div ref={VibrationBorderRef} className="Vibration_border"></div>
            </div>
            {/* Energy  */}
            <div className="wrapper_Energy">
              <p ref={energyTitleRef} className="Energy_title">
                Energy rebalancing by Meta-therapy
              </p>
              <p ref={energyDescRef} className="Energy_desc">
                THE PHYSIOSCAN OFFERS THE POSSIBILITY OF "RE-INFORMING" THE
                TISSUES CONCERNED IN A FREQUENTIAL WAY IN ORDER TO RESTART THE
                FUNCTIONING OF THE DEFICIENT ORGANS. THIS QUANTUM BIOTECHNOLOGY
                IS INFORMATIVE, GENTLE, NON-BINDING, THEREFORE IN TOTAL RESPECT
                WITH THE UNIQUENESS OF THE LIVING BODY.
              </p>
              <div ref={energyBorderRef} className="Energy_border"></div>
            </div>
            {/* Investigate  */}
            <div className="wrapper_Investigate">
              <p ref={InvestigateTitleRef} className="Investigate_title">
                Investigate and correct vibrational fields
              </p>
              <p ref={InvestigateDescRef} className="Investigate_desc">
                <span>
                  THE PHYSIOSCAN IS A DEVICE THAT USES WAVE NANOTECHNOLOGY, THE
                  PURPOSE OF WHICH IS TO INVESTIGATE AND CORRECT THE VIBRATIONAL
                  FIELDS OF SUBTLE INFORMATION (ELF WAVES) EMITTED BY THE HUMAN
                  BODY VIA THE BRAIN. BASED ON THE IDENTIFICATION OF HUMAN
                  BIO-FREQUENCIES, IT MAKES IT POSSIBLE TO PERFORM A HIGHLY
                  PRECISE ENERGY SCAN AND A VIBRATIONAL HARMONIZATION OF THE
                  ORGANISM.
                </span>
                <span>
                  The investigation presents an astonishing rapidity in taking
                  measurements and in interpreting the results observed. It
                  brings a lot of valuable information about organs, tissues,
                  specific cells and biochemical structures.
                </span>
              </p>
              <div
                ref={InvestigateBorderRef}
                className="Investigate_border"
              ></div>
              <div className="wrapper_image_Investigate">
                <img
                  ref={imageInvestigateRef}
                  className="image_Investigate"
                  src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/60422374863caf2a190d9315_physioscan_03-p-800.jpeg"
                  alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/60422374863caf2a190d9315_physioscan_03-p-800.jpeg"
                />
              </div>
            </div>
            <div className="border_bottom_TechnicalPhysio"></div>
          </div>
        </div>
      </div>
    </>
  );
}
