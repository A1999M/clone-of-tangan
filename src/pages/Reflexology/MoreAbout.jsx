import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function MoreAbout() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let hiddenGoals = () => {
      gsap.to(document.querySelector(".goals"), {
        opacity: 0,
        duration: 0.5,
        ease: "ease",
      });
    };
    let showGoals = () => {
      gsap.to(document.querySelector(".goals"), {
        opacity: 1,
        duration: 0.5,
        ease: "ease",
      });
    };

    gsap.to(document.body, {
      backgroundColor: "#000",
      duration: 0.3,
      scrollTrigger: {
        trigger: document.querySelector(".moreAbout"),
        endTrigger: document.querySelector(".titles_bottom_more4"),
        start: "top 90%",
        toggleActions: "restart reverse restart reverse",
        end: "bottom 0%",
        onEnter: hiddenGoals,
        onEnterBack: hiddenGoals,
        onLeave: showGoals,
        onLeaveBack: showGoals,
      },
    });

    // animate titles line
    let darkerText1 = () => {
      gsap.to(document.querySelector(".titles_more1"), {
        color: "#787070",
        duration: 1,
        ease: "Expo.easeOut",
      });
    };
    let lightText1 = () => {
      gsap.to(document.querySelector(".titles_more1"), {
        color: "#f5f5f5",
        duration: 1,
        ease: "Expo.easeOut",
      });
    };

    let darkerText2 = () => {
      gsap.to(document.querySelector(".titles_more2"), {
        color: "#787070",
        duration: 1,
        ease: "Expo.easeOut",
      });
    };
    let lightText2 = () => {
      gsap.to(document.querySelector(".titles_more2"), {
        color: "#f5f5f5",
        duration: 1,
        ease: "Expo.easeOut",
      });
    };

    let darkerText3 = () => {
      gsap.to(document.querySelector(".titles_more3"), {
        color: "#787070",
        duration: 1,
        ease: "Expo.easeOut",
      });
    };
    let lightText3 = () => {
      gsap.to(document.querySelector(".titles_more3"), {
        color: "#f5f5f5",
        duration: 1,
        ease: "Expo.easeOut",
      });
    };

    let darkerText4 = () => {
      gsap.to(document.querySelector(".titles_more4"), {
        color: "#787070",
        duration: 1,
        ease: "Expo.easeOut",
      });
    };
    let lightText4 = () => {
      gsap.to(document.querySelector(".titles_more4"), {
        color: "#f5f5f5",
        duration: 1,
        ease: "Expo.easeOut",
      });
    };

    gsap.to(document.querySelector(".line_title1"), {
      duration: 0.7,
      width: "100%",
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: document.querySelector(".titles_more1"),
        start: "center 60%",
        end: "+=300 0%",
        toggleActions: "restart reverse restart reverse",
        onEnter: darkerText1,
        onEnterBack: darkerText1,
        onLeave: lightText1,
        onLeaveBack: lightText1,
        // markers: {
        //   startColor: "#ffd700",
        //   endColor: "#ff0000",
        //   fontSize: "20px",
        // },
      },
    });
    gsap.to(document.querySelector(".line_title2"), {
      duration: 0.7,
      width: "100%",
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: document.querySelector(".titles_more2"),
        start: "center 65%",
        end: "bottom 10%",
        toggleActions: "restart reverse restart reverse",
        onEnter: darkerText2,
        onEnterBack: darkerText2,
        onLeave: lightText2,
        onLeaveBack: lightText2,
        // markers: {
        //   startColor: "#ffd700",
        //   endColor: "#ff0000",
        //   fontSize: "20px",
        // },
      },
    });
    gsap.to(document.querySelector(".line_title3"), {
      duration: 0.7,
      width: "100%",
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: document.querySelector(".titles_more3"),
        start: "center 65%",
        end: "bottom 10%",
        toggleActions: "restart reverse restart reverse",
        onEnter: darkerText3,
        onEnterBack: darkerText3,
        onLeave: lightText3,
        onLeaveBack: lightText3,
        // markers: {
        //   startColor: "#ffd700",
        //   endColor: "#ff0000",
        //   fontSize: "20px",
        // },
      },
    });
    gsap.to(document.querySelector(".line_title4"), {
      duration: 0.7,
      width: "100%",
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: document.querySelector(".titles_more4"),
        start: "center 65%",
        end: "bottom 10%",
        toggleActions: "restart reverse restart reverse",
        onEnter: darkerText4,
        onEnterBack: darkerText4,
        onLeave: lightText4,
        onLeaveBack: lightText4,
        // markers: {
        //   startColor: "#ffd700",
        //   endColor: "#ff0000",
        //   fontSize: "20px",
        // },
      },
    });

    gsap.to(document.querySelector(".image_more_section"), {
      scale: 1,
      duration: 1.5,
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: document.querySelector(".image_more_section"),
        start: "center 90%",
        end: "bottom 0%",
        markers: true,
      },
    });

    // animate titles line
    let darkerBottomText1 = () => {
      gsap.to(document.querySelector(".titles_bottom_more1"), {
        color: "#787070",
        duration: 1,
        ease: "Expo.easeOut",
      });
    };
    let lightBottomText1 = () => {
      gsap.to(document.querySelector(".titles_bottom_more1"), {
        color: "#f5f5f5",
        duration: 1,
        ease: "Expo.easeOut",
      });
    };

    let darkerBottomText2 = () => {
      gsap.to(document.querySelector(".titles_bottom_more2"), {
        color: "#787070",
        duration: 1,
        ease: "Expo.easeOut",
      });
    };
    let lightBottomText2 = () => {
      gsap.to(document.querySelector(".titles_bottom_more2"), {
        color: "#f5f5f5",
        duration: 1,
        ease: "Expo.easeOut",
      });
    };

    let darkerBottomText3 = () => {
      gsap.to(document.querySelector(".titles_bottom_more3"), {
        color: "#787070",
        duration: 1,
        ease: "Expo.easeOut",
      });
    };
    let lightBottomText3 = () => {
      gsap.to(document.querySelector(".titles_bottom_more3"), {
        color: "#f5f5f5",
        duration: 1,
        ease: "Expo.easeOut",
      });
    };

    let darkerBottomText4 = () => {
      gsap.to(document.querySelector(".titles_bottom_more4"), {
        color: "#787070",
        duration: 1,
        ease: "Expo.easeOut",
      });
    };
    let lightBottomText4 = () => {
      gsap.to(document.querySelector(".titles_bottom_more4"), {
        color: "#f5f5f5",
        duration: 1,
        ease: "Expo.easeOut",
      });
    };

    gsap.to(document.querySelector(".line_bottom_title1"), {
      duration: 0.7,
      width: "100%",
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: document.querySelector(".titles_bottom_more1"),
        start: "center 60%",
        end: "+=300 0%",
        toggleActions: "restart reverse restart reverse",
        onEnter: darkerBottomText1,
        onEnterBack: darkerBottomText1,
        onLeave: lightBottomText1,
        onLeaveBack: lightBottomText1,
        // markers: {
        //   startColor: "#ffd700",
        //   endColor: "#ff0000",
        //   fontSize: "20px",
        // },
      },
    });
    gsap.to(document.querySelector(".line_bottom_title2"), {
      duration: 0.7,
      width: "100%",
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: document.querySelector(".titles_bottom_more2"),
        start: "center 65%",
        end: "bottom 10%",
        toggleActions: "restart reverse restart reverse",
        onEnter: darkerBottomText2,
        onEnterBack: darkerBottomText2,
        onLeave: lightBottomText2,
        onLeaveBack: lightBottomText2,
        // markers: {
        //   startColor: "#ffd700",
        //   endColor: "#ff0000",
        //   fontSize: "20px",
        // },
      },
    });
    gsap.to(document.querySelector(".line_bottom_title3"), {
      duration: 0.7,
      width: "100%",
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: document.querySelector(".titles_bottom_more3"),
        start: "center 65%",
        end: "bottom 10%",
        toggleActions: "restart reverse restart reverse",
        onEnter: darkerBottomText3,
        onEnterBack: darkerBottomText3,
        onLeave: lightBottomText3,
        onLeaveBack: lightBottomText3,
        // markers: {
        //   startColor: "#ffd700",
        //   endColor: "#ff0000",
        //   fontSize: "20px",
        // },
      },
    });
    gsap.to(document.querySelector(".line_bottom_title4"), {
      duration: 0.7,
      width: "100%",
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: document.querySelector(".titles_bottom_more4"),
        start: "center 65%",
        end: "bottom 10%",
        toggleActions: "restart reverse restart reverse",
        onEnter: darkerBottomText4,
        onEnterBack: darkerBottomText4,
        onLeave: lightBottomText4,
        onLeaveBack: lightBottomText4,
        // markers: {
        //   startColor: "#ffd700",
        //   endColor: "#ff0000",
        //   fontSize: "20px",
        // },
      },
    });

    gsap.to(document.querySelector(".image_left_more_section"), {
      scale: 1,
      duration: 1.5,
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: document.querySelector(".image_left_more_section"),
        start: "center 95%",
        end: "bottom 0%",
      },
    });
  });

  return (
    <>
      <div className="container_fluid moreAbout">
        <div className="row">
          <div className="col-12 col-lg-9">
            <div className="wrapper_more_descs">
              <span className="titles_more1">
                STRESS
                <span className="line_title1"></span>
              </span>
              <span className="titles_more2">
                MIGRAINE
                <span className="line_title2"></span>
              </span>
              <span className="titles_more3">
                URINARY DISORDER
                <span className="line_title3"></span>
              </span>
              <span className="titles_more4">
                DIGESTIVE DISORDER
                <span className="line_title4"></span>
              </span>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="wrapper_image_more">
              <img
                className="image_more_section"
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6040f0058fb2888251090654_reflexo-03.jpg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6040f0058fb2888251090654_reflexo-03.jpg"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="wrapper_left_image_more">
              <img
                className="image_left_more_section"
                src="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6040f006f868eb0c4ce0536a_reflexo-01.jpg"
                alt="https://uploads-ssl.webflow.com/5bc989248743153705f137da/6040f006f868eb0c4ce0536a_reflexo-01.jpg"
              />
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <div className="wrapper_more_descs2">
              <span className="titles_bottom_more1">
                TROUBLES DU SOMMEIL
                <span className="line_bottom_title1"></span>
              </span>
              <span className="titles_bottom_more2">
                MAUX DE DOS
                <span className="line_bottom_title2"></span>
              </span>
              <span className="titles_bottom_more3">
                DOULEURS ARTICULAIRES
                <span className="line_bottom_title3"></span>
              </span>
              <span className="titles_bottom_more4">
                DOULEURS DE RÈGLES…
                <span className="line_bottom_title4"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
