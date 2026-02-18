import React, { useState, useMemo } from "react";

const UseMemo2 = () => {
  const [count, setCount] = useState(0);

  const user = useMemo(() => ({ name: "Bhargav", age: 30 }), []);

  console.log("Parent rendered");

  return (
    <div>
      <h2>Parent count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <Child user={user} />
    </div>
  );
};

const Child = React.memo(({ user }) => {
  console.log("Child rendered");
  return <h3>User: {user.name}</h3>;
});

export default UseMemo2;
