import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitText from "../../plugins/SplitText";

export default function Header() {
  let scopeRef = useRef(null);
  let titleHeaderRef = useRef(null);
  let wrapperHeaderImageRef = useRef(null);
  let stickySection = useRef(null);
  let imageHeaderRef = useRef(null);
  let titleStickyTexts = useRef(null);
  let descHeaderRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger, SplitText);

      gsap.set(document.querySelector(".title_part1"), {
        y: -150,
        clipPath: "inset(100% 0% 0% 0%)",
      });
      gsap.set(document.querySelector(".title_part2"), {
        y: 150,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(wrapperHeaderImageRef.current, { y: "11rem" });

      gsap.to(document.querySelector(".title_part1"), {
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "Expo.easeOut",
      });
      gsap.to(document.querySelector(".title_part2"), {
        y: 0,
        duration: 1.5,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "Expo.easeOut",
      });
      gsap.to(wrapperHeaderImageRef.current, {
        y: 0,
        duration: 1.5,
        ease: "Expo.easeOut",
      });

      gsap.to(imageHeaderRef.current, {
        clipPath: "inset(0% 0%)",
        duration: 2,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: imageHeaderRef.current,
          start: "top 62%",
          end: "center 20%",
          scrub: 1,
          markers: true,
        },
      });
      gsap.to(stickySection.current, {
        duration: 1,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: scopeRef.current,
          anticipatePin: 1,
          endTrigger: descHeaderRef.current,
          start: "top 0%",
          end: "center 60%",
          pin: true,
          pinSpacing: false,
          pinSpacer: false,
          // markers: {
          //   startColor: "#ffd700",
          //   endColor: "#ff0000",
          //   fontSize: "20px",
          // },
        },
      });

      let splitStickyTitle = new SplitText(titleStickyTexts.current, {
        type: "lines",
      });
      gsap.fromTo(
        splitStickyTitle.lines,
        {
          opacity: 0,
          perspective: 200,
          rotate: "20deg",
          y: 200,
          clipPath: "inset(100% 0% 0% 0%)",
          transformOrigin: "0% 100%",
        },
        {
          opacity: 1,
          perspective: 0,
          rotate: 0,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "Expo.easeOut",
          stagger: 0.01,
          scrollTrigger: {
            trigger: titleStickyTexts.current,
            start: "center 100%",
            end: "bottom 5%",
            // markers: {
            //   startColor: "#ffd700",
            //   endColor: "#ff0000",
            //   fontSize: "20px",
            // },
          },
        }
      );
    }, scopeRef);

    return () => ctx.revert();
  });

  return (
    <div>
      <div className="container-fluid header_physioscan">
        <div className="row">
          <div className="col-12">
            <div className="price_physioscan">
              <span>60€</span>
              <span className="line_price"></span>
              <span>1h15</span>
            </div>
            <p ref={titleHeaderRef} className="title_header_physioscan">
              <span className="title_part1">Physio</span>
              <span className="title_part2">scanning</span>
            </p>
          </div>
          <div ref={scopeRef} className="col-12 px-0 scope">
            <div ref={wrapperHeaderImageRef} className="wrapper_header_image">
              <div ref={stickySection}>
                <div className="zxa" ref={imageHeaderRef}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 sticky_texts_physioscan">
            <p ref={titleStickyTexts} className="title_header_image">
              REBALANCE A <br />
              PHYSICAL DISORDER, <br />
              EMOTIONAL OR <br />
              ENERGY. <br />
            </p>
            <p ref={descHeaderRef} className="desc_header_image">
              AN ANCESTRAL PRACTICE, REFLEXOLOGY IS A GENTLE MANUAL METHOD
              CONSIDERING THE INDIVIDUAL AS A WHOLE, FROM A HOLISTIC POINT OF
              VIEW.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
