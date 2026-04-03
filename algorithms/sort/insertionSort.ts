// Compares pairs ofadjacent elements, swapping them if the larger one comes first.
// This ensures that the first 2 elements are sorted correctly in ascending order.
// This process continues until the entire array is sorted.

export default function insertionSort(arr: Array<number>): Array<number> {
  if (arr.length <= 1) return arr;

  for (let secondIdx = 1; secondIdx < arr.length; secondIdx++) {
    for (let firstIdx = 0; firstIdx < secondIdx; firstIdx++) {
      if (arr[firstIdx] > arr[secondIdx])
        [arr[secondIdx], arr[firstIdx]] = [arr[firstIdx], arr[secondIdx]];
    }
  }
  return arr;
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)
