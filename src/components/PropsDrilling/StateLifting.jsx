import { useState } from "react";

const Parent = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <InputBox onChange={setText} />
      <h2>Type: {text}</h2>
    </div>
  );
};

const InputBox = ({ onChange }) => {
  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter something"
    />
  );
};

const StateLifting = () => {
  return (
    <div>
      <p>Exaple of State Lifting</p>
      <Parent />
    </div>
  );
};

export default StateLifting;
