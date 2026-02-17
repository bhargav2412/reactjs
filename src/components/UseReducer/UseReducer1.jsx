import { useReducer } from "react";

const UseReducer1 = () => {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <div>
      <input type="checkbox" checked={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </div>
  );
};

export default UseReducer1;
