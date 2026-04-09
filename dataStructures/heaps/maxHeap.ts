// Max heap is an ordered binary tree where each parent node >= its children
export default class MaxHeap {
  constructor(private arr: Array<number>) {
    this.arr = arr;
  }

  insert(value: number) {
    this.arr.push(value);
    this.heapifyUp();
  }

  remove() {
    if (this.arr.length === 0) return null;
    const value = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    this.heapifyDown();
    return value;
  }

  heapifyUp() {
    let idx = this.arr.length - 1;
    while (idx > 0) {
      const parentIndex = Math.floor((idx - 1) / 2);
      // If current value > parent, swap them
      if (this.arr[idx] > this.arr[parentIndex]) {
        [this.arr[idx], this.arr[parentIndex]] = [
          this.arr[parentIndex],
          this.arr[idx],
        ];
      }
    }
  }

  heapifyDown() {
    let idx = 0;
    while (idx < this.arr.length) {
      const leftChildIndex = 2 * idx + 1;
      const rightChildIndex = 2 * idx + 2;

      // Initialize `largestIdx` to the current index
      let largestIdx = idx;

      // If left child > current value, set `largestIdx` to the left child index
      if (
        leftChildIndex < this.arr.length &&
        this.arr[leftChildIndex] > this.arr[largestIdx]
      ) {
        largestIdx = leftChildIndex;
      }

      // If right child > current value, set `largestIdx` to the right child index
      if (
        rightChildIndex < this.arr.length &&
        this.arr[rightChildIndex] > this.arr[largestIdx]
      ) {
        largestIdx = rightChildIndex;
      }

      // If `largestIdx` is not the current index, swap them and update `idx`
      if (largestIdx !== idx) {
        [this.arr[idx], this.arr[largestIdx]] = [
          this.arr[largestIdx],
          this.arr[idx],
        ];
        idx = largestIdx;
      } else break; // If `largestIdx` is the current idx, break the loop
    }
  }

  getMax() {
    return this.arr[0];
  }

  getMin() {
    return this.arr[this.arr.length - 1];
  }

  peek() {
    return this.arr[0];
  }

  size() {
    return this.arr.length;
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  clear() {
    this.arr = [];
  }
}
