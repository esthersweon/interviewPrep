// Places the designated pivot in the correct position and returns its index
// Elements < pivot are to the left; elements >= pivot are to the right
function getPivotIdx(arr: number[], start: number, end: number): number {
  const pivot = arr[end]; // pivot = last element
  let pivotIdx = start; // pivotIdx = 0

  // Iterate through all numbers except the pivot
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      // Swap with element at pivotIdx if number < pivot
      [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
      // Increment pivotIdx, so that every number before pivotIdx is < pivot
      pivotIdx++;
    }
  }

  // Swap the pivot with the element at pivotIdx, since we know all numbers before pivotIdx is < pivot
  [arr[pivotIdx], arr[end]] = [arr[end], arr[pivotIdx]];
  return pivotIdx;
}

function quickSortInPlace(
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1,
): void {
  if (start >= end) return;

  const pivotIdx = getPivotIdx(arr, start, end);
  quickSortInPlace(arr, start, pivotIdx - 1);
  quickSortInPlace(arr, pivotIdx + 1, end);
}

// Efficient, in-place, recursive sorting algorithm
// Selects a pivot and partitions all other elements into 2 subarrays: elements < pivot and elements > pivot
// Quick sort is then recursively applied to each subarray
// Once the subarrays are sorted, they are merged with the pivot element between them
export default function quickSort(arr: number[]): number[] {
  quickSortInPlace(arr, 0, arr.length - 1);
  return arr;
}

// Time Complexity: O(n log n)
//   - Since array is halved at every level, it takes log n levels to reach the base case of 1-element arrays
//   - Each level partitions n elements
//   - Total work is n * log n
// Space Complexity: O(log n)
//   - Since the algorithm is in-place, it uses O(log n) space for the recursive calls
//   - The space complexity is due to the recursive stack frames
