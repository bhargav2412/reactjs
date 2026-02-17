import { useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ChildA setCount={setCount} />
      <ChildB count={count} />
    </div>
  );
};

const ChildA = (props) => {
  const handleClick = () => {
    props.setCount((preCount) => preCount + 1);
  };
  return <button onClick={handleClick}>Increment</button>;
};

const ChildB = (props) => {
  return <h1>Count: {props.count}</h1>;
};

const SharingState = () => {
  return (
    <div>
      <p>Example of SharingState</p>
      <h2>
        <Parent />
      </h2>
    </div>
  );
};

export default SharingState;
