import { useState } from "react";
import "./Item.css";
// const countInitial = () => {Item0
//   return 0;
// };
const Item = ({ index, onDelete }) => {
  // function Item({ num }) {
  const [count, setCount] = useState(0);
  const decrementCount = () => {
    // setCount((prevCount) => prevCount - 1);
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const incrementCount = () => {
    // setCount((prevCount) => prevCount + 1);
    setCount(count + 1);
  };
  return (
    <div className="item">
      {/* <p>Item</p> */}
      <p>Item{index}</p>
      <div>
        <button
          onClick={decrementCount}
          type="button"
          className="btn btn-light"
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={incrementCount}
          type="button"
          className="btn btn-light"
        >
          +
        </button>
        <button
          onClick={() => onDelete(index)}
          type="button"
          className="btn btn-light"
        >
          Delete <i class="bi bi-x-circle"></i>
        </button>
      </div>
    </div>
  );
};
export default Item;
