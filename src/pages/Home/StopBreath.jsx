import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../../plugins/splitText";
import CustomEase from "../../plugins/CustomEase";
import stopVideo from "../../assets/videos/stopBreath.mp4";
import "./Home.scss";

export default function StopBreath() {
  let titleStopBreath = useRef();
  let descStopBreath = useRef();
  let vidRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    let splitTitle = new SplitText(titleStopBreath.current, { type: "lines" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleStopBreath.current,
        start: "top 30%",
        end: "bottom 10%",
      },
    });

    tl.fromTo(
      splitTitle.lines,
      { opacity: 0, y: -80, clipPath: "inset(100% 0% 0% 0%)" },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.4,
        stagger: 0.1,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.026,0.172 0.126,0.4 0.191,0.548 0.238,0.644 0.334,0.748 0.395,0.815 0.432,0.872 0.568,0.946 0.697,1.016 1,1 1,1 "
        ),
      }
    );
    tl.fromTo(
      descStopBreath.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      "<0.3"
    );
  });

  return (
    <>
      <div className="container-fluid stop_breath">
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className="wrapper_stop_breath_video">
              <div>
                <video
                  ref={vidRef}
                  src={stopVideo}
                  autoPlay
                  muted
                  loop={true}
                ></video>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <p ref={titleStopBreath} className="title_stop_breath">
              stop, breathe, reconnect
            </p>
            <p ref={descStopBreath} className="desc_stop_breath">
              DIDIER MARTIN, PRACTITIONER IN ENERGY CARE, WELCOMES YOU WITH A
              HOLISTIC APPROACH TO HELP YOU RELEASE AND REVIVE YOUR VITAL
              ENERGIES. IT USES THREE COMPLEMENTARY CARE TECHNIQUES TO START
              ANEW ON A HEALTHY BASIS, THUS LEAVING THE BODY THE POSSIBILITY OF
              STARTING ITS MECHANISMS OF HOMEOSTASIS AND BALANCING.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
