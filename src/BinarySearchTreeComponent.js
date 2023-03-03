import React from "react";
import BinarySearchTree from "./BinarySearchTree";

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
        <h1 className="circle">{node.value}</h1>
        <div className="d-flex justify-content-between">
          <div className="col left child">
            <div>{this.renderTree(node.left)}</div>
          </div>
          <div className="col right child">
            <div>{this.renderTree(node.right)}</div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="binary-search-tree">
        {this.renderTree(this.state.tree.root)}
      </div>
    );
  }
}

export default BinarySearchTreeComponent;
