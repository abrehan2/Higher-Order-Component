// IMPORTS -
import HOC from "./HOC";
import "../styles/count.css";

const CountB = ({ value, incrementHandler }) => {
  return (
    <>
      <div className="count count__A">
        <h1>Item 2 Count: {value}</h1>
        <button onClick={incrementHandler} type="button">
          Push
        </button>
      </div>
    </>
  );
};

export default HOC(CountB);
