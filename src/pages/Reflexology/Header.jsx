import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../../plugins/SplitText";
import "./Reflexology.scss";

export default function Header() {
  let titleHeaderRef = useRef(null);
  let imageHeaderRef = useRef(null);
  let wrapperHeaderImageRef = useRef(null);
  let descHeaderRef = useRef(null);
  let scopeRef = useRef(null);
  let stickySection = useRef(null);
  let titleStickyTexts = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger, SplitText);

      let splitTitleHeader = new SplitText(titleHeaderRef.current, {
        type: "lines",
      });

      gsap.set(splitTitleHeader.lines[0], {
        y: -90,
        clipPath: "inset(100% 0% 0% 0%)",
      });
      gsap.set(splitTitleHeader.lines[1], {
        y: 90,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(wrapperHeaderImageRef.current, { y: "11rem" });

      gsap.to(splitTitleHeader.lines[0], {
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "Expo.easeOut",
      });
      gsap.to(splitTitleHeader.lines[1], {
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
        duration: 0.5,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: imageHeaderRef.current,
          start: "top 80%",
          end: "center 50%",
          scrub: true,
        },
      });

      gsap.to(stickySection.current, {
        duration: 1,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: scopeRef.current,
          endTrigger: descHeaderRef.current,
          start: "top 13%",
          end: "center 50%",
          scrub: 2,
          pin: true,
          pinSpacing: false,
        },
      });
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
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
        duration: 1.5,
        ease: "Expo.easeOut",
        stagger: 0.01,
        scrollTrigger: {
          trigger: titleStickyTexts.current,
          start: "center 95%",
          end: "bottom 5%",
        },
      }
    );
  });

  return (
    <>
      <div className="container-fluid header_reflexology">
        <div className="row">
          <div className="col-12">
            <div className="price_reflexology">
              <span>50€</span>
              <span className="line_price"></span>
              <span>1h00</span>
            </div>
            <p ref={titleHeaderRef} className="title_header_reflexology">
              reflexology <br />
              plantar
            </p>
          </div>
          <div ref={scopeRef} className="col-12 px-0">
            <div ref={wrapperHeaderImageRef} className="wrapper_header_image">
              <div ref={stickySection}>
                <div className="zxa" ref={imageHeaderRef}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 sticky_texts">
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
    </>
  );
}
