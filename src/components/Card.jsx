const cardStile = {
  border: "2px solid black",
  width: "300px",
  minHeight: "200px",
  boxShadow: "10px 10px 0px black",
  padding: "20px",
};

const h2Stile = {
  backgroundColor: "#dfb9b9ca",
  padding: "20px",
};

export const Card = ({ title, text }) => {
  return (
    <div style={cardStile}>
      <h2 style={h2Stile}>{title}</h2>
      <p style={h2Stile}>{text}</p>
    </div>
  );
};
