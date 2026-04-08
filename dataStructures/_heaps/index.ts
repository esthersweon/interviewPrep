// Heap is an ordered binary tree
// Max heap is an ordered binary tree where each parent node is greater than or equal to its children.
export default class Heap {
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
    let index = this.arr.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.arr[index] > this.arr[parentIndex]) {
        [this.arr[index], this.arr[parentIndex]] = [
          this.arr[parentIndex],
          this.arr[index],
        ];
      }
    }
  }

  heapifyDown() {
    let index = 0;
    while (index < this.arr.length) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let largestIndex = index;
      if (
        leftChildIndex < this.arr.length &&
        this.arr[leftChildIndex] > this.arr[largestIndex]
      ) {
        largestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.arr.length &&
        this.arr[rightChildIndex] > this.arr[largestIndex]
      ) {
        largestIndex = rightChildIndex;
      }
      if (largestIndex !== index) {
        [this.arr[index], this.arr[largestIndex]] = [
          this.arr[largestIndex],
          this.arr[index],
        ];
        index = largestIndex;
      } else {
        break;
      }
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
