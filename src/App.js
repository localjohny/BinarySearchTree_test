import React from "react";

import "./styles/App.css";

import BinarySearchTreeComponent from "./components/BinarySearchTreeComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Binary Search Tree (Press Space)</h1>
        <BinarySearchTreeComponent />
      </div>
    );
  }
}

export default App;
