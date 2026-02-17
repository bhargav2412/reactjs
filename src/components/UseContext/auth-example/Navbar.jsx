import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const NavBar = () => {
  const { isLoggedIn, logIn, logOut } = useContext(AuthContext);

  return (
    <nav>
      {isLoggedIn ? (
        <button onClick={logOut}>LogOut</button>
      ) : (
        <button onClick={logIn}>logIn</button>
      )}
    </nav>
  );
};

export default NavBar;
