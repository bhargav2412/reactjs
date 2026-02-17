import { useEffect, useState, useEffectEvent } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  const onTick = useEffectEvent(() => {
    console.log("Count :", count);
    setCount((prev) => prev + 1);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      onTick();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Count : {count}</p>
    </div>
  );
};

export default Test;
