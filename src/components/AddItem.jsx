import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/todo/todoSlice";

const AddItem = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();

    if (value.trim().length === 0) {
      alert("Hey, add some text!");
      setValue("");
      return;
    }
    dispatch(addItem({ content: value }));

    setValue("");
  };

  return (
    <div className="formDiv">
      <form className="inputForm">
        <input
          type="text"
          className="inputBox"
          placeholder="Enter a task"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <button className="subButton" onClick={formSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddItem;
