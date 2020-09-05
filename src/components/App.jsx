import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";
import Heading from "./Heading";

function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick() {
    setItemList((prev) => {
      return [...itemList, item];
    });
    setItem(""); //to make the input box empty.
  }

  function deleteItem(id) {
    setItemList((prev) => {
      return prev.filter((eachPrevItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <Heading />
      <div className="form">
        <InputArea change={handleChange} click={handleClick} item={item} />
      </div>
      <div>
        <ul>
          {itemList.map((eachItem, index) => {
            return (
              <TodoItem
                text={eachItem}
                onCheck={deleteItem}
                key={index}
                id={index}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
