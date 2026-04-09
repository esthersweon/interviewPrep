/**
 * Minimum Heap that serves as a priority queue for Dijkstra's algorithm.
 * Each heap element has a { vertex, distance }.
 */
export default class MinHeapForDijkstras {
  heap: { vertex: string; distance: number }[];
  position: Record<string, number>;

  constructor() {
    this.heap = [];
    this.position = {}; // Maps each vertex to its index in the heap.
  }

  // Helper method to swap two elements and update their positions.
  swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    this.position[this.heap[i].vertex] = i;
    this.position[this.heap[j].vertex] = j;
  }

  // Bubbles up the element at index i to restore heap property.
  percolateUp(i: number) {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent].distance > this.heap[i].distance) {
        this.swap(i, parent);
        i = parent;
      } else {
        break;
      }
    }
  }

  // Bubbles down the element at index i to restore heap property.
  percolateDown(i: number) {
    const n = this.heap.length;
    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let smallest = i;

      if (left < n && this.heap[left].distance < this.heap[smallest].distance) {
        smallest = left;
      }
      if (
        right < n &&
        this.heap[right].distance < this.heap[smallest].distance
      ) {
        smallest = right;
      }
      if (smallest !== i) {
        this.swap(i, smallest);
        i = smallest;
      } else {
        break;
      }
    }
  }

  /**
   * Inserts a new item into the heap or updates it if it already exists.
   * @param {{vertex: string, distance: number}} item The item to insert or update.
   */
  insert(item: { vertex: string; distance: number }) {
    // If the vertex exists, perform a decrease-key operation.
    if (this.position.hasOwnProperty(item.vertex)) {
      const i = this.position[item.vertex];
      if (item.distance < this.heap[i].distance) {
        this.heap[i].distance = item.distance;
        this.percolateUp(i);
      }
      return;
    }
    // Otherwise, add it as a new item.
    this.heap.push(item);
    const idx = this.heap.length - 1;
    this.position[item.vertex] = idx;
    this.percolateUp(idx);
  }

  /**
   * Removes and returns the minimum element (the root) from the heap.
   * @return {{vertex: string, distance: number}|undefined} The removed element.
   */
  delete(): { vertex: string; distance: number } | undefined {
    if (this.heap.length === 0) return undefined;
    const min = this.heap[0];
    const last = this.heap.pop();
    // Remove mapping for the vertex being removed.
    delete this.position[min.vertex];
    if (this.heap.length > 0) {
      this.heap[0] = last!;
      this.position[last!.vertex] = 0;
      this.percolateDown(0);
    }
    return min;
  }

  /**
   * Checks if the heap is empty.
   * @return {boolean} True if the heap is empty; otherwise, false.
   */
  isEmpty() {
    return this.heap.length === 0;
  }

  /**
   * Returns the minimum element of the heap without removing it.
   * @return {{vertex: string, distance: number}|undefined}
   */
  findMin() {
    return this.heap.length > 0 ? this.heap[0] : undefined;
  }
}
