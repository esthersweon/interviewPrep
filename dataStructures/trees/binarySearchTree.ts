class Node {
  value: number;
  left: null | Node;
  right: null | Node;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree<T> {
  root: null | Node;

  constructor() {
    this.root = null;
  }

  traverseToLeft(node: Node): Node {
    let currentNode: null | Node = node;
    let lastNode = node;
    while (currentNode !== null) {
      currentNode = currentNode.left;
      if (currentNode) lastNode = currentNode;
    }
    return lastNode;
  }

  traverseToRight(subTreeRoot: null | Node): null | Node {
    console.log({ subTreeRoot });
    let currentNode = subTreeRoot;
    while (currentNode !== null) {
      if (currentNode.right) {
        currentNode = currentNode.right;
      } else break;
    }
    return currentNode;
  }

  /**
   * Inserts a new value into the BST while maintaining BST properties.
   * @param value The value to be inserted into the BST.
   */
  insert(value: number): void {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    let currentNode: null | Node = this.root;

    while (currentNode !== null) {
      if (currentNode.value >= value) {
        // add duplicates and smaller values to the left
        if (currentNode.left) currentNode = currentNode.left;
        else {
          currentNode.left = new Node(value);
          break;
        }
      } else {
        if (currentNode.right) currentNode = currentNode.right;
        else {
          currentNode.right = new Node(value);
          break;
        }
      }
    }
  }

  /**
   * Searches for a value in the BST. Returns true if the value exists, false otherwise.
   * @param value The value to search for.
   * @return True if the value is found, false otherwise.
   */
  search(value: number): boolean {
    if (this.root === null) return false;
    let currentNode: null | Node = this.root;

    while (currentNode !== null) {
      if (value === currentNode.value) return true;
      if (value <= currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  /**
   * Deletes a value from the BST, if it exists, while maintaining BST properties.
   * @param value The value to be deleted from the BST.
   */
  delete(value: number): void {
    if (this.root === null) return;

    let parentNode: null | Node = null;
    let currentNode: null | Node = this.root;

    while (currentNode !== null) {
      if (value === currentNode.value) {
        // if root should be deleted
        if (this.root && parentNode === null) {
          let maxNodeOnLeft: null | Node = this.traverseToRight(this.root.left);
          if (maxNodeOnLeft) {
            maxNodeOnLeft.right = this.root.right;
            this.root = maxNodeOnLeft;
          }
          break;
        } else if (parentNode !== null) {
          // if another node should be deleted
          const isLeftOfParentNode =
            parentNode.left && parentNode.left.value === currentNode.value;

          // Deleting on left side
          if (isLeftOfParentNode) {
            if (currentNode.right === null) {
              parentNode.left = currentNode.left;
            } else {
              parentNode.left = currentNode.right;
              let minNodeOnRight: null | Node = this.traverseToLeft(
                currentNode.right,
              );
              minNodeOnRight.left = currentNode.left;
            }
            break;
          } else {
            // Deleting on right side
            if (currentNode.right === null) {
              parentNode.right = currentNode.left;
            } else {
              parentNode.right = currentNode.right;
              let minNodeOnRight = this.traverseToLeft(currentNode.right);
              minNodeOnRight.left = currentNode.left;
            }
            break;
          }
        }
      } else if (value <= currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
  }
}

// Time Complexity for insertion: O(log n)
// Time Complexity for search: O(log n)
// Time Complexity for deletion: O(log n)
