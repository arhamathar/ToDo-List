import React from "react";

function InputArea(props) {
  return (
    <div>
      <input required type="text" onChange={props.change} value={props.item} />
      <button disabled={!props.item} onClick={props.click}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
