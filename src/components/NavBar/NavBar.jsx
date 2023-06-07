import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { BubblyLink } from "react-bubbly-transitions";
import "./NavBar.scss";

export default function NavBar() {
  let wrapperNavRef = useRef();
  let scopeRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(wrapperNavRef.current, {
        opacity: 1,
        duration: 1.5,
        delay: 0.7,
        ease: "Expo.easeOut",
      });
    }, scopeRef);
    return () => {
      ctx.revert();
    };
  });

  return (
    <>
      <div ref={scopeRef} className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="container_Navbar">
              <ul ref={wrapperNavRef} className="wrapper_nav">
                <li className="mai_page">
                  <BubblyLink colorStart="#000" colorEnd="#f5f5f5" to="/tangan">
                    TANGAN
                  </BubblyLink>
                </li>
                <li>
                  <BubblyLink colorStart="#000" colorEnd="#f5f5f5" to="/">
                    REFLEXOLOGIE
                  </BubblyLink>
                </li>
                <li>
                  <BubblyLink
                    colorStart="#000"
                    colorEnd="#f5f5f5"
                    to="/physioscan"
                  >
                    PHYSIOSCAN
                  </BubblyLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
