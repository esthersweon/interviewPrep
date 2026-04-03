// Recursive algorithm that divides and conquers
// Continuously divides the array into halves until it cannot be further divided (i.e. 1 element)
// Merge the sorted subarrays into larger arrays until the entire array is merged.
export default function recursiveMergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const midIdx = Math.floor(arr.length / 2);
  const firstHalf = recursiveMergeSort(arr.slice(0, midIdx));
  const secondHalf = recursiveMergeSort(arr.slice(midIdx));

  let [firstIdx, secondIdx] = [0, 0];
  let result: number[] = [];

  while (firstIdx < firstHalf.length || secondIdx < secondHalf.length) {
    const firstHalfDone = firstIdx >= firstHalf.length;
    const secondHalfDone = secondIdx >= secondHalf.length;

    if (firstHalfDone && !secondHalfDone) {
      result.push(secondHalf[secondIdx]);
      secondIdx++;
    } else if (secondHalfDone && !firstHalfDone) {
      result.push(firstHalf[firstIdx]);
      firstIdx++;
    } else if (firstHalf[firstIdx] <= secondHalf[secondIdx]) {
      result.push(firstHalf[firstIdx]);
      firstIdx++;
    } else {
      result.push(secondHalf[secondIdx]);
      secondIdx++;
    }
  }
  return result;
}

// Time Complexity: O(n log n)
//   - Since array is halved at every level, it takes log n levels to reach the base case of 1-element arrays
//   - Each level merges n elements
//   - Total work is n * log n
// Space Complexity: O(n)
