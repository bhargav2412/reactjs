import { useState, useEffect } from "react";
import "./First.css";

const First = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count : ${count}`;
    console.log("Component re-rendered!");
  }, [count]);

  return (
    <div className="container">
      <h1>Count:{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default First;
