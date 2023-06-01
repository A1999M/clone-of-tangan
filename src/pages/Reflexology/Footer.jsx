import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";
import "./Reflexology.scss";

export default function Footer() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(document.querySelector(".title_footer"), {
      clipPath: "inset(100% 0% 0% 0%)",
      y: -150,
      perspective: 200,
    });
    gsap.to(document.querySelector(".title_footer"), {
      y: 0,
      perspective: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1,
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: document.querySelector(".title_footer"),
        start: "top 40%",
        end: "bottom 0%",
      },
    });
  });

  let hoverON = (e) => {
    gsap.to(document.querySelector(".hover_title_footer"), {
      opacity: 1,
      clipPath: "inset(0% 0%)",
      x: e.clientX - 100,
      y: e.clientY - 100,
      duration: 0.5,
    });
  };
  let hoverOff = () => {
    gsap.to(document.querySelector(".hover_title_footer"), {
      opacity: 0,
      clipPath: "inset(100% 0%)",
      duration: 0.5,
    });
  };
  let moveImage = (e) => {
    gsap.to(document.querySelector(".hover_title_footer"), {
      opacity: 1,
      clipPath: "inset(0% 0%)",
      x: e.clientX - 324,
      y: e.clientY - 324,
      duration: 0.5,
    });
  };

  return (
    <>
      <div className="contianer-fluid footer_reflexology">
        <div className="row">
          <div className="col-12">
            <div className="wrapper_title_footer">
              <p className="next_page">Next treatment</p>
              <span
                onMouseEnter={hoverON}
                onMouseLeave={hoverOff}
                onMouseMove={moveImage}
                className="title_footer"
              >
                PHYSIOSCAN
              </span>
              <img
                className="hover_title_footer"
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/602a88e1239abee3048bf523_thumb_physioscan.jpg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/602a88e1239abee3048bf523_thumb_physioscan.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
