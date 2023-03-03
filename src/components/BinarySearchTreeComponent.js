import React from "react";
import BinarySearchTree from "../classes/BinarySearchTree";

class BinarySearchTreeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tree: new BinarySearchTree() };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (event.code === "Space") {
      const value = Math.floor(Math.random() * 201) - 100;
      this.state.tree.insert(value);
      this.forceUpdate();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  renderTree(node) {
    if (node === null) {
      return null;
    }

    return (
      <div className="row d-flex justify-content-center">
        <h3 className="circle">{node.value}</h3>
        <div className="d-flex justify-content-between">
          <div className="col">{this.renderTree(node.left)}</div>
          <div className="col">{this.renderTree(node.right)}</div>
        </div>
      </div>
    );
  }

  render() {
    return this.renderTree(this.state.tree.root);
  }
}

export default BinarySearchTreeComponent;
