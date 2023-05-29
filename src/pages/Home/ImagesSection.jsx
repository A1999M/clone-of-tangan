import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "../../plugins/CustomEase";
import Btn from "../../components/Btn";
import "./Home.scss";

export default function ImagesSection() {
  let leftImageRef = useRef(null);
  let rightImageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: rightImageRef.current,
        start: "top 35%",
        end: "bottom 1%",
        toggleActions: "play reverse restart none",
      },
    });

    gsap.set(leftImageRef.current, {
      clipPath: "inset(100% 0% 0% 0%)",
      scale: 2.5,
    });
    gsap.set(rightImageRef.current, {
      clipPath: "inset(100% 0% 0% 0%)",
      scale: 2.5,
    });

    tl.to(rightImageRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      duration: 0.7,
      ease: CustomEase.create(
        "custom",
        "M0,0 C0,0 0.034,0.203 0.124,0.362 0.196,0.49 0.214,0.554 0.33,0.692 0.45,0.834 0.524,0.858 0.678,0.92 0.83,0.98 1,1 1,1 "
      ),
    });
    tl.to(
      leftImageRef.current,
      {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        duration: 0.7,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.034,0.203 0.124,0.362 0.196,0.49 0.214,0.554 0.33,0.692 0.45,0.834 0.524,0.858 0.678,0.92 0.83,0.98 1,1 1,1 "
        ),
      },
      "<0.5"
    );
  });

  return (
    <>
      <div className="container-fluid images_section">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="wrapper_left_image">
              <img
                ref={leftImageRef}
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6040ffd9ffe7018b7b1f3880_home__seance-massage.jpg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6040ffd9ffe7018b7b1f3880_home__seance-massage.jpg"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="wrapper_right_image">
              <img
                ref={rightImageRef}
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/604101c608caef5b642fd603_seance__physioscan.jpg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/604101c608caef5b642fd603_seance__physioscan.jpg"
              />
            </div>
            <Btn
              borderColor="#000"
              firstText="makean appointment"
              secondText="TAKE A BREAK"
            />
          </div>
        </div>
      </div>
    </>
  );
}
