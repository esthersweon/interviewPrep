# Graphs

Graphs are non-linear data structures composed of nodes (**vertices**) and connections (**edges**) that model complex, non-hierarchical relationships.

- Can contain cycles (i.e. infinite loops)
- Directed (edges have direction) vs. undirected
- Weighted (edges have values representing cost, distance, etc.) vs. unweighted

### Applications

Networks like social media, GPS locations, and the internet (i.e. web graph with pages and hyperlinks)

### Representations

- Adjacency matrix
  - 2D array where `matrix[i][j]` indicates an edge between node `i` and node `j`
  - Best for dense graphs
- Adjacency list
  - Array of lists where each list represents a vertex and its neighbors
  - More space-efficient for sparse graphs

### Key algorithms

- Traversal
  - **BFS** (Breadth-First Search)
  - **DFS** (Depth-First Search)
    - **Preorder** – Node → Left → Right
    - **Inorder** – Left → Node → Right
    - **Postorder** – Left → Right → Node
- **Dijkstra's** – Find the shortest / cheapest route between nodes (used in GPS)
- **Cycle Detection** – Identify loops in a network
