import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("about");
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={goToAbout}>Go to about</button>
    </div>
  );
};

export default Home;
