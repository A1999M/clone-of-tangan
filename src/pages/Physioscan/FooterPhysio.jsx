import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./Physioscan.scss";

export default function FooterPhysio() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(document.querySelector(".title1"), {
      clipPath: "inset(100% 0% 0% 0%)",
      y: -200,
      perspective: 200,
    });
    gsap.set(document.querySelector(".title2"), {
      clipPath: "inset(100% 0% 0% 0%)",
      y: 200,
      perspective: 200,
    });

    gsap.to(document.querySelector(".title1"), {
      y: 0,
      perspective: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1,
      ease: "Expo.easeOut",
      stagger: 0.1,
      scrollTrigger: {
        trigger: document.querySelector(".title_footer"),
        start: "top 40%",
        end: "bottom 0%",
      },
    });
    gsap.to(document.querySelector(".title2"), {
      y: 0,
      perspective: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1,
      ease: "Expo.easeOut",
      stagger: 0.1,
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
      <div className="contianer-fluid Footer_Physio">
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
                <span className="title1">reflexology</span>
                <br />
                <span className="title2">plantar</span>
              </span>
              <img
                className="hover_title_footer"
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5fdb54f39f8bd4daab088d0e_home-thumb_reflexologie.jpg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/5fdb54f39f8bd4daab088d0e_home-thumb_reflexologie.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
