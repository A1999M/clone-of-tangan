import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Btn from "../../components/Btn";

export default function Technical() {
  let scope = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".border_top_technical"),
          start: "top 15%",
          end: "top 0%",
        },
      });

      tl.to(document.querySelector(".border_top_technical"), {
        width: "100%",
        duration: 2.5,
        ease: "Expo.easeOut",
      });
      tl.to(
        document.querySelector(".border_right_Technical"),
        {
          height: "100vh",
          duration: 3,
          ease: "Expo.easeOut",
        },
        "<0.3"
      );
      tl.to(
        document.querySelector(".border_left_Technical"),
        {
          height: "100vh",
          duration: 3,
          ease: "Expo.easeOut",
        },
        "<0.1"
      );
      gsap.to(document.querySelector(".stickyRow"), {
        duration: 1,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: document.querySelector(".stickyRow"),
          endTrigger: document.querySelector(".Ancestral_desc2"),
          start: "top 0%",
          end: "center 65%",
          markers: true,
          pin: true,
          pinSpacer: false,
          pinSpacing: false,
        },
      });
    }, scope);

    return () => ctx.revert();
  });

  return (
    <>
      <div ref={scope} className="container-fluid Technical">
        <div className="border_top_technical"></div>
        <div className="row stickyRow justify-content-start">
          <div className="col-12 col-lg-5 position-relative">
            <div className="wrapper_Technical_title">
              <p className="Technical_title">Technical</p>
            </div>
            <div className="border_right_Technical"></div>
          </div>
          <div className="col-12 col-lg-2 position-relative">
            <div className="border_left_Technical"></div>
            <div className="wrapper_btn_Technical">
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
            <div className="wrapper_Reflexzones">
              <p className="Reflexzones_title">Reflex zones</p>
              <p className="Reflexzones_desc1">
                THIS ALTERNATIVE CARE TECHNIQUE IS PRACTICED BY DIGITAL PRESSURE
                ON <br /> THE ENTIRE FOOT, IN ORDER TO DETECT AND RELEASE
                TENSION. REFLEXOLOGY <br /> AIMS TO MOBILIZE THE BODY'S
                SELF-HEALING PROCESS WHICH REBALANCES A <br /> PHYSICAL,
                EMOTIONAL OR ENERGETIC DISORDER.
              </p>
              <p className="Reflexzones_desc2">
                The reflex zones of the foot are massaged according to a very
                precise protocol linked to <br /> the fact that each part of the
                body is represented at a specific place on the foot, called the{" "}
                <br />
                reflex zone. This is the miniature projection of this part. The
                tensions present and the <br /> texture of the skin indicate the
                places on which it will be necessary to insist. Nevertheless,{" "}
                <br /> during each session the entire reflex zones will be
                treated.
              </p>
            </div>
            <div className="wrapper_image1_technical">
              <img
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5feca1ebc46ece50791c880e_feet-map-01-p-800.jpeg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5feca1ebc46ece50791c880e_feet-map-01-p-800.jpeg"
              />
            </div>
            <div className="wrapper_image2_technical">
              <img
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5feca3329c74e6ab9561347a_feet-map-02-p-800.jpeg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5feca3329c74e6ab9561347a_feet-map-02-p-800.jpeg"
              />
            </div>
            <div className="wrapper_image3_technical">
              <img
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5feca347aac908296c5fbeae_feet-map-03-p-800.jpeg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5feca347aac908296c5fbeae_feet-map-03-p-800.jpeg"
              />
            </div>
            <div className="wrapper_image4_technical">
              <img
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5feca35bd91ad311edfd674a_feet-map-04-p-800.jpeg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5feca35bd91ad311edfd674a_feet-map-04-p-800.jpeg"
              />
            </div>
            <div className="wrapper_Ancestral">
              <p className="Ancestral_title">Ancestral method</p>
              <p className="Ancestral_desc1">
                THE CHINESE AND EGYPTIANS, OVER 2000 BC, USED A FORM OF
                REFLEXOLOGY <br /> DURING ANTIQUITY. IN CHINA, THE IDEOGRAM
                “FOOT” LITERALLY MEANS “PART <br /> OF THE BODY THAT SAFEGUARDS
                HEALTH”. <br /> ‍ IT WAS
              </p>
              <p className="Ancestral_desc2">
                in 1917 that Zone therapy, or relieving pain at home appeared ,
                Fitzgerald's discovery which <br /> led him to establish a map
                of the “connected” regions of the body. <br /> Reflexology is
                also based on the work of Eunice Ingham (1889-1974), American
                nurse and <br />
                physiotherapist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
