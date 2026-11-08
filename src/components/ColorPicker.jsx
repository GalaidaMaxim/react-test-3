import { Counter } from "./Counter";
import { useState } from "react";

const cardStile = {
  border: "2px solid black",
  // width: "00px",
  minHeight: "200px",
  boxShadow: "10px 10px 0px black",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const styleColorBox = {
  border: "2px solid black",
  width: "300px",
  height: "200px",
};

export const ColorPicker = () => {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  const line = `rgb(${r}, ${g}, ${b})`;

  return (
    <div style={cardStile}>
      <div style={{ backgroundColor: line, ...styleColorBox }}></div>
      <div style={{ display: "flex" }}>
        <Counter title={"Red"} onChange={setR} />
        <Counter title={"Green"} onChange={setG} />
        <Counter title={"Blue"} onChange={setB} />
      </div>
    </div>
  );
};
