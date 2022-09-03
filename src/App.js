import React from "react";
import AddItem from "./components/AddItem";
import List from "./components/List";

const App = () => {
  return (
    <div className="app">
      <AddItem />
      <div className="divider">
        <span className="dividerBar"></span>
      </div>
      <List />
    </div>
  );
};

export default App;
