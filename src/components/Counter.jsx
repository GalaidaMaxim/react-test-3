import { useState } from "react";

const stiledCounter = {
  border: "2px solid black",
  width: "300px",
  minHeight: "200px",
  boxShadow: "10px 10px 0px black",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const buttonStyle = {
  backgroundColor: "#ffffff",
  border: "2px solid black",
  padding: "20px",
  fontSize: "20px",
};

export const Counter = ({ title, onChange = () => {} }) => {
  const [count, setCount] = useState(0);
  if (count > 255) {
    setCount(255);
  } else if (count < 0) {
    setCount(0);
  }
  onChange(count);
  return (
    <div style={stiledCounter}>
      <h1>{title}</h1>
      <h2>{count}</h2>
      <div>
        <button
          style={buttonStyle}
          onClick={() => setCount((prev) => prev - 10)}
        >
          min
        </button>

        <button
          style={buttonStyle}
          onClick={() => setCount((prev) => prev + 10)}
        >
          add
        </button>
      </div>
    </div>
  );
};
