import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../features/todo/todoSlice";

const TaskItem = ({ item }) => {
  const dispatch = useDispatch();

  console.log({ item });

  const deleteIt = () => {
    dispatch(
      deleteItem({
        id: item.id,
      })
    );
  };

  return (
    <li className="itemLi">
      <div key={item.id}>{item.content}</div>
      <div>
        <button
          className="deleteButton"
          onClick={() => {
            deleteIt();
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
