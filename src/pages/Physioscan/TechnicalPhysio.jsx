import Btn from "../../components/Btn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";
import "./Physioscan.scss";

export default function TechnicalPhysio() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".border_left_TechnicalPhysio"),
          start: "top 0%",
          end: "top 0%",
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      tl.to(document.querySelector(".border_left_TechnicalPhysio"), {
        height: "100vh",
        duration: 2,
        delay: 0.2,
        ease: "Expo.easeOut",
      });
      tl.to(
        document.querySelector(".border_right_TechnicalPhysioo"),
        {
          height: "100vh",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.15"
      );

      gsap.fromTo(
        document.querySelector(".title_TechnicalPhysio"),
        { y: -120 },
        {
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: document.querySelector(".title_TechnicalPhysio"),
            start: "top 20%",
            end: "bottom 0%",
          },
        }
      );
      gsap.to(document.querySelector(".sticky_TechnicalPhysio"), {
        duration: 1,
        scrollTrigger: {
          trigger: document.querySelector(".sticky_TechnicalPhysio"),
          endTrigger: document.querySelector(".image_Investigate"),
          start: "top 0%",
          end: "center 65%",
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
          trigger: document.querySelector(".Physioquanta_title"),
          start: "center 70%",
          end: "bottom 10%",
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      PhysioquantaTl.fromTo(
        document.querySelector(".Physioquanta_title"),
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
        document.querySelector(".Physioquanta_desc"),
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
        document.querySelector(".Physioquanta_border"),
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );

      // scan border
      let VibrationTl = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".Vibration_title"),
          start: "center 70%",
          end: "bottom 10%",
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      VibrationTl.fromTo(
        document.querySelector(".Vibration_title"),
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
        document.querySelector(".Vibration_desc"),
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
        document.querySelector(".Vibration_border"),
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
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      EnergyTl.fromTo(
        document.querySelector(".Energy_title"),
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
        document.querySelector(".Energy_desc"),
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
        document.querySelector(".Energy_border"),
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
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });
      InvestigateTl.fromTo(
        document.querySelector(".Investigate_title"),
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
        document.querySelector(".Investigate_desc"),
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
        document.querySelector(".Investigate_border"),
        {
          width: "110%",
          duration: 2,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );

      gsap.fromTo(
        document.querySelector(".Vibration_image"),
        { scale: 1.5, clipPath: "inset(0% 0% 100% 0%)" },
        {
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: document.querySelector(".Vibration_image"),
            start: "center 85%",
            end: "bottom 0%",
            // markers: {
            //   startColor: "#ffd700",
            //   endColor: "#ff0000",
            //   fontSize: "20px",
            // },
          },
        }
      );

      gsap.fromTo(
        document.querySelector(".image_Investigate"),
        { scale: 1.5, clipPath: "inset(0% 0% 100% 0%)" },
        {
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "Expo.easeOut",
          scrollTrigger: {
            trigger: document.querySelector(".image_Investigate"),
            start: "center 85%",
            end: "bottom 0%",
            // markers: {
            //   startColor: "#ffd700",
            //   endColor: "#ff0000",
            //   fontSize: "20px",
            // },
          },
        }
      );
    }, document.querySelector(".TechnicalPhysio"));

    return () => ctx.revert();
  });

  return (
    <>
      <div className="contianer-fluid TechnicalPhysio position-relative">
        <div className="row sticky_TechnicalPhysio justify-content-start">
          <div className="col-12 col-lg-5 position-relative">
            <div className="wrapper_title_TechnicalPhysio">
              <p className="title_TechnicalPhysio">Technical</p>
            </div>
            <div className="border_left_TechnicalPhysio"></div>
          </div>
          <div className="col-12 col-lg-2 position-relative">
            <div className="border_right_TechnicalPhysioo"></div>
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
              <p className="Physioquanta_title">Physioquanta</p>
              <p className="Physioquanta_desc">
                DISCOVER THE REFERENCE SITE ON THE PHYSIOSCAN
                PHYSIOQUANTA.COM/PHYSIOSCAN
              </p>
              <div className="Physioquanta_border"></div>
            </div>
            {/* Target  */}
            <div className="wrapper_Vibration">
              <p className="Vibration_title">Vibration frequencies</p>
              <p className="Vibration_desc">
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
                  className="Vibration_image"
                  src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6042235f79a7104cc84ed500_physioscan_02-p-800.jpeg"
                  alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6042235f79a7104cc84ed500_physioscan_02-p-800.jpeg"
                />
              </div>

              <div className="Vibration_border"></div>
            </div>
            {/* Rebalance  */}
            <div className="wrapper_Energy">
              <p className="Energy_title">Energy rebalancing by Meta-therapy</p>
              <p className="Energy_desc">
                THE PHYSIOSCAN OFFERS THE POSSIBILITY OF "RE-INFORMING" THE
                TISSUES CONCERNED IN A FREQUENTIAL WAY IN ORDER TO RESTART THE
                FUNCTIONING OF THE DEFICIENT ORGANS. THIS QUANTUM BIOTECHNOLOGY
                IS INFORMATIVE, GENTLE, NON-BINDING, THEREFORE IN TOTAL RESPECT
                WITH THE UNIQUENESS OF THE LIVING BODY.
              </p>
              <div className="Energy_border"></div>
            </div>
            {/* Reinform  */}
            <div className="wrapper_Investigate">
              <p className="Investigate_title">
                Investigate and correct vibrational fields
              </p>
              <p className="Investigate_desc">
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
              <div className="Investigate_border"></div>
              <div className="wrapper_image_Investigate">
                <img
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
