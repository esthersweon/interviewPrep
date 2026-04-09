# Trees

Trees are hierarchical, non-linear data structure composed of **nodes** connected by **edges**, with a single **root** node and no cycles.

Leaf: A node with no children (bottom-most nodes).
Height/Depth: Height is the number of edges to the furthest leaf; depth is the number of edges from the root.

### Applications

- Hierarchies like file systems and HTML DOM
- Implementing efficient searching / sorting algorithms

### Key algorithms

- **Height** - Number of edges to furthest **leaf** (node with no children)
- **Depth** - Number of edges from the root
- **Traversal**
  - **BFS** (Breadth-First Search)
  - **DFS** (Depth-First Search)
    - **Preorder** – Node → Left → Right
    - **Inorder** – Left → Node → Right
    - **Postorder** – Left → Right → Node

## Binary Search Tree

A Binary Search Tree (BST) is a binary tree where every node satisfies these rules:

- Left subtree contains nodes < parent node
- Right subtree contains nodes >= parent node
- Both subtrees are independently BSTs
- No duplicate keys (to maintain clear ordering)

The performance of a BST depends heavily on its "balance" or height.

### Key algorithms

- **Searching**
  - Starting from the root, compare the target value with the current node – if smaller, move left; if larger, move right
  - Effectively cuts the search space in half at each step
- **Insertion**:
  - New nodes are added as leaf nodes
  - Follow the search path until you reach a NULL spot that matches the value's sorted position
- **Deletion**
  - Delete leaf (simple removal)
  - Delete node with 1 child (replace node with child)
  - Delete node with 2 children (replace with in-order successor or predecessor)
