const Button = () => {
  const handleClick = () => {
    alert("HOOORA");
  };
  return <button onClick={handleClick}>Click Me</button>;
};

export default Button;
