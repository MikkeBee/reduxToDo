import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const List = () => {
  const items = useSelector((state) => {
    return state.todos;
  });

  return (
    <section className="listBox">
      <ul className="tasks-list">
        {items.map((item) => (
          <TaskItem item={item} />
        ))}
      </ul>
    </section>
  );
};

export default List;
