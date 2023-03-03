class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = {
      value,
      left: null,
      right: null,
    };

    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;

      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else if (value > current.value) {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        } else {
          break;
        }
      }
    }
  }
}

export default BinarySearchTree;
