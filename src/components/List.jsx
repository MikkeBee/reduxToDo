import React from "react";
import { useSelector } from "react-redux";
import taskItem from "./taskItem";

const List = () => {
  const items = useSelector((state) => {
    return state.content;
  });

  return (
    <div>
      <ul className="tasks-list">
        {items.map((item) => (
          <taskItem id={item.id} title={item.name} completed={item.status} />
        ))}
      </ul>
    </div>
  );
};

export default List;
