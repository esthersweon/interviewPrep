// BFS on a directed graph (in adjacency list format), given a starting node
// e.g. const graph = {
//   "A": ["B", "C", "D"],
//   "B": ["E", "F"],
//   "C": ["G", "H"],
//   "D": ["I", "J"],
//   "E": ["D"],
//   "F": [],
//   "G": [],
//   "H": [],
//   "I": [],
//   "J": [],
// }

// breadthFirstSearch(graph, "A"); // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

/*  Auxiliary classes */
/**
 * A Queue class with O(1) enqueue and dequeue is provided for you.
 *
 * Example usage:
 * const q = new Queue();
 * q.enqueue('a');
 * q.enqueue('b');
 * q.dequeue(); //'a'
 * q.isEmpty(); // False
 */
class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Queue<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  enqueue(item: T): void {
    const newNode = new Node(item);
    if (this.isEmpty()) {
      this.head = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  dequeue(): T | null {
    if (this.isEmpty() || !this.head) {
      return null;
    } else {
      const removedNode = this.head;
      this.head = this.head.next;
      removedNode.next = null;
      this.length--;
      if (this.isEmpty()) {
        this.tail = null;
      }
      return removedNode.value;
    }
  }
}

export default function breadthFirstSearch(
  graph: Record<string, Array<string>>,
  source: string,
): Array<string> {
  if (!graph[source]) return [];

  const result: string[] = [];

  const queue = new Queue<string>();
  queue.enqueue(source);

  while (!queue.isEmpty()) {
    const current = queue.dequeue();

    // Avoid infinite loops caused by cycles
    if (current && !result.includes(current)) {
      result.push(current);

      const children = graph[current] ?? [];
      children.forEach((child) => queue.enqueue(child));
    }
  }
  return result;
}

// Space Complexity: O(V) (queue) + O(V) (result) => O(V)
// Time Complexity: O(V + E) (each node and edge is visited once) => O(V + E)
