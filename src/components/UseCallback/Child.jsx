import React from "react";

const Child = ({ click }) => {
  console.log("Child Rendered");
  return (
    <div>
      <button onClick={click}>Child Button</button>
    </div>
  );
};

export default React.memo(Child);
