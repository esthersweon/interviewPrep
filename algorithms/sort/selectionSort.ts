// Repeatedly scans an unsorted array
// Finds the minimum element each time and builds up a sorted array
export default function selectionSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let minIdx = 0;

  // Find the index of the smallest element (minIdx)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minIdx]) minIdx = i;
  }

  // Swap the smallest element with the first element in the unsorted array
  [arr[0], arr[minIdx]] = [arr[minIdx], arr[0]];

  return [arr[0], ...selectionSort(arr.slice(1))];
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)
