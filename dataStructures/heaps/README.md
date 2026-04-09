# Heaps

Heaps are complete binary trees that satisfy the "heap property," i.e. each parent node is either >= its children (**max-heap**) or <= its children (**min-heap**).

- Max (root is max value) vs. min (root is min value) heaps
- Can insert, extract (remove the root), and heapify (maintaining the property), all operating in O(log n) time

### Applications

Priority queues (e.g. task scheduling in operating systems) and efficient O(log n) insertion and deletion of the max / min element

### Representations

- Array where for any node at index `i`, the left child is at `2 * i + 1` and the right at `2 * i + 2`

  Types: Binary heaps (two children) are most common, but
  -ary heaps exist.

### Key algorithms

- Heap sort - Sorting algorithm with O(n \* log n) time complexity that requires no extra memory
- Selection – Finding the k-th smallest or largest element in an array
- Used in Dijkstra’s algorithm (graphs) and Prim’s minimum spanning algorithm (trees)
