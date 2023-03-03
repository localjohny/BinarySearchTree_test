import React from "react";

import "./styles/App.css";

import BinarySearchTreeComponent from "./components/BinarySearchTreeComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <h2 className="title">
          Binary Search Tree
          <p>(Press "Space" for begin, Press "R" for restart)</p>
        </h2>
        <BinarySearchTreeComponent />
      </div>
    );
  }
}

export default App;
