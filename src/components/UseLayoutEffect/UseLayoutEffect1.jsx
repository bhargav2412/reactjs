import { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect1 = () => {
  useEffect(() => {
    console.log("useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  return <div>useEffect</div>;
};

export default UseLayoutEffect1;
