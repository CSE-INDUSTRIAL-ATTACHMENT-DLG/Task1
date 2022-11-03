import React, { useState } from "react";
import Item from "./Item";
import "./Item.css";
const App = () => {
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const addItem = () => {
    // console.log("Hello");
    setItems([...items, { index: totalItems }]);
    setTotalItems(totalItems + 1);
  };
  const deleteItem = (index) => {
    let allItems = [...items];
    let newItems = allItems.filter((item) => item.index !== index);
    setItems([...newItems]);
  };
  return (
    <div className="main">
      <button type="button" className="btn btn-light" onClick={addItem}>
        Add Item<i className="bi bi-plus-circle"></i>
      </button>
      {items.map((item) => (
        <Item index={item.index} onDelete={deleteItem} key={item.index} />
      ))}
    </div>
  );
};

export default App;
