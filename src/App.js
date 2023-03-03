import React from "react";
import BinarySearchTreeComponent from "./BinarySearchTreeComponent";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="d-flex justify-content-center">
          Binary Search Tree (Press Space)
        </h1>
        <BinarySearchTreeComponent />
      </div>
    );
  }
}

export default App;
