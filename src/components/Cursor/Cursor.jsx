import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Cursor.scss";

export default function Cursor() {
  let [position, setPosition] = useState({ x: 0, y: 0 });
  let cursorRef = useRef();

  let handlerMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
    let bodyColor = getComputedStyle(document.body).getPropertyValue(
      "background-color"
    );
    if (bodyColor === "rgb(0, 0, 0)") {
      gsap.to(cursorRef.current, {
        x: position.x,
        y: position.y,
        backgroundColor: "#fff",
        mixBlendMode: "difference",
      });
    } else {
      gsap.to(cursorRef.current, {
        x: position.x,
        y: position.y,
        backgroundColor: "rgb(0, 0, 0)",
        mixBlendMode: "normal",
      });
    }
  };

  useEffect(() => {
    document.documentElement.addEventListener("mousemove", handlerMouseMove);

    return () => {
      document.documentElement.removeEventListener(
        "mousemove",
        handlerMouseMove
      );
    };
  });

  return (
    <>
      <div ref={cursorRef} className="custom_cursor"></div>
    </>
  );
}
