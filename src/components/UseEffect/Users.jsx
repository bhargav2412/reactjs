import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  });
  return (
    <div>
      <h2>Users list</h2>
      <ul>
        {users.map((res) => (
          <li key={res.id}>
            {res.id}-{res.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
