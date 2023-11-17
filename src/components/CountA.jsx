// IMPORTS -
import HOC from "./HOC";
import "../styles/count.css";

const CountA = ({ value, incrementHandler }) => {
  return (
    <>
      <div className="count count__A">
        <h1>Item 1 Count: {value}</h1>
        <button onClick={incrementHandler} type="button">
          Push
        </button>
      </div>
    </>
  );
};

export default HOC(CountA);
