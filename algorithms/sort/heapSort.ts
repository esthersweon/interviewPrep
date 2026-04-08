export default function heapSort(arr: number[]): number[] {
  // First build a max heap
  buildMaxHeap(arr); // [0, 1, 2, 3, 4, 5] => [5, 4, 2, 3, 1, 0]

  // Iterate through the heap backwards
  // Swap the parent (arr[0]) with the last element of the heap
  // Elements swapped to the end constitute the sorted part of the array (ignored in the next iteration by "i--").
  for (let i = arr.length - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Build another max heap before the next iteration
    heapify(arr, i, 0);
  }

  return arr;
}

// i = 2
// arr = [0, 1, 2, 3, 4, 5]
// heapify(arr, 6, 2); -> idxOfMaxValue = 2; leftIdx = 5; rightIdx = 6 (invalid);
// swap 2 and 5 -> arr = [0, 1, 5, 3, 4, 2];
// heapify(arr, 6, 5) -> idxOfMaxValue = 5; leftIdx = 11 (invalid); rightIdx = 12 (invalid); -> no changes

// i = 1
// arr = [0, 1, 5, 3, 4, 2];
// heapify(arr, 6, 1); -> idxOfMaxValue = 1; leftIdx = 3; rightIdx = 4;
// swap 1 and 4 -> arr = [0, 4, 5, 3, 1, 2];
// heapify(arr, 6, 4); -> idxOfMaxValue = 4; leftIdx = 9 (invalid); rightIdx = 10 (invalid); -> no changes

// i = 0
// arr = [0, 4, 5, 3, 1, 2];
// heapify(arr, 6, 0); -> idxOfMaxValue = 0; leftIdx = 1;  rightIdx = 2;
// swap 0 and 2 -> arr = [5, 4, 0, 3, 1, 2];
// heapify(arr, 6, 2); // idxOfMaxValue = 2; leftIdx = 5;  rightIdx = 6 (invalid);
// swap 2 and 5 -> arr = [5, 4, 2, 3, 1, 0];
function buildMaxHeap(arr: number[]) {
  for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    heapify(arr, arr.length, i);
  }
}

// Swaps parent and child if child is larger than parent
function heapify(arr: number[], size: number, parentIdx: number) {
  let idxOfMaxValue = parentIdx;

  const leftIdx = 2 * parentIdx + 1;
  const rightIdx = 2 * parentIdx + 2;

  // Find the highest value between parent, left child, and right child
  if (leftIdx < size && arr[leftIdx] > arr[idxOfMaxValue])
    idxOfMaxValue = leftIdx;
  if (rightIdx < size && arr[rightIdx] > arr[idxOfMaxValue])
    idxOfMaxValue = rightIdx;

  // If the parent isn't the largest value, swap it with the value at idxOfMaxValue
  if (idxOfMaxValue !== parentIdx) {
    [arr[parentIdx], arr[idxOfMaxValue]] = [arr[idxOfMaxValue], arr[parentIdx]];

    // Recursively heapify with the updated idxOfMaxValue
    heapify(arr, size, idxOfMaxValue);
  }
}

// Time Complexity: O(n log n)
// Space Complexity: O(1)
