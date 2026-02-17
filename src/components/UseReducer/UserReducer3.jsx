import { useReducer } from "react";

const UserReducer3 = () => {
  const reducer = (state, action) => {
    return {
      ...state,
      [action.name]: action.value,
    };
  };
  const [formData, dispatch] = useReducer(reducer, { username: "", email: "" });

  const handleChange = (e) => {
    dispatch({
      name: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
      </form>
      <p>
        {formData.username} - {formData.email}
      </p>
    </div>
  );
};

export default UserReducer3;
