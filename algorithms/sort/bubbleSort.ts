// Iterate over an unsorted array and swap each adjacent pair of elements if the larger one comes first.
// After the first iteration, the largest element in the array will be at the last index.
// Repeat until the array is sorted.
export default function bubbleSort(arr: number[]): number[] {
  let hasSwapped = false;

  // Swap each adjacent pair of elements if the larger one comes first.
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      hasSwapped = true;
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }

  return hasSwapped ? bubbleSort(arr) : arr;
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)
