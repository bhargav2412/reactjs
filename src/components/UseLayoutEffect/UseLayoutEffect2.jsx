import React, { useLayoutEffect, useRef } from "react";

const UseLayoutEffect2 = () => {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    const element = boxRef.current;
    const width = element.offsetWidth;
    element.style.transform = `translateX(${width}px)`;
  }, []);

  return (
    <div
      ref={boxRef}
      style={{ padding: "30px", background: "skyblue", transition: "3s" }}
    >
      Animatex Box
    </div>
  );
};

export default UseLayoutEffect2;
