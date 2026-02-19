import { useState } from "react";
// import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import First from "./components/UseEffect/First";
import Timer from "./components/UseEffect/Timer";
import WindowSizeTracker from "./components/UseEffect/WindowSizeTracker";
import Users from "./components/UseEffect/Users";
import AppRoutes from "./routes/AppRoutes";
import Test from "./components/UseEffect/Test";
import Main from "./components/PropsDrilling/Main";
import StateLifting from "./components/PropsDrilling/StateLifting";
import SharingState from "./components/PropsDrilling/SharingState";
import ThemeContext from "./components/UseContext/ThemeContext";
import Toolbar from "./components/UseContext/Toolbar";
import { AuthProvider } from "./components/UseContext/auth-example/AuthContext";
import NavBar from "./components/UseContext/auth-example/Navbar";
import UseReducer1 from "./components/UseReducer/UseReducer1";
import UseReducer2 from "./components/UseReducer/UseReducer2";
import UserReducer3 from "./components/UseReducer/UserReducer3";
import UseMemo1 from "./components/UseMemo/UseMemo1";
import UseMemo2 from "./components/UseMemo/UseMemo2";
import Parent from "./components/UseCallback/Parent";
import UseLayoutEffect1 from "./components/UseLayoutEffect/UseLayoutEffect1";
import UseLayoutEffect2 from "./components/UseLayoutEffect/UseLayoutEffect2";
import Chat from "./components/UseLayoutEffect/Chat";

const App = () => {
  return (
    <>
      <Chat />
    </>
    //  <UseLayoutEffect2 />
    // <UseLayoutEffect1 />

    //  <Parent />
    // <UseMemo2 />

    // <AuthProvider>
    //       <NavBar />
    //     </AuthProvider>
    // const [theme, setTheme] = useState("light");
    //  <div>
    //   <h1>Example of useContext</h1>
    //   <ThemeContext.Provider value={{ theme, setTheme }}>
    //     <Toolbar />
    //   </ThemeContext.Provider>
    // </div>

    // <div>
    //   <First />
    //   <Timer />
    //   <WindowSizeTracker />
    //   <Users />
    // </div>
    // <BrowserRouter>
    //   <h1 className="title">React Rounter Dom Example</h1>
    //   <nav className="navbar">
    //     <Link to="/" className="nav-link">
    //       Home
    //     </Link>
    //     <Link to="/about" className="nav-link">
    //       About
    //     </Link>
    //     <Link to="/contact" className="nav-link">
    //       Contact
    //     </Link>
    //     <Link to="/user/10" className="nav-link">
    //       User
    //     </Link>
    //     <Link to="/products" className="nav-link">
    //       Products
    //     </Link>
    //   </nav>
    //   <AppRoutes />
    // </BrowserRouter>
    // <Test />
    // <Main />
    // <StateLifting />
    // <SharingState />
  );
};

export default App;
