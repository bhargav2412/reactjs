const Main = () => {
  const Parent = () => {
    const username = "Bhargav Gohel";
    return <Child name={username} />;
  };

  const Child = ({ name }) => {
    return <GrandChild name={name} />;
  };

  const GrandChild = ({ name }) => {
    return <h1>My name is {name}</h1>;
  };

  return (
    <div>
      <b>Props Drilling Example</b>
      <Parent />
    </div>
  );
};

export default Main;
