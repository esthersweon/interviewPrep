// Divides an array into halves and checks which half the target is in.
// Recursively calls itself with the half of the array the target was found in.
// If the target is not in the array, the function returns -1.
export default function binarySearch(
  arr: Array<number>,
  target: number,
): number {
  const startIdx = Math.floor(arr.length / 2);

  if (arr[startIdx] === undefined) return -1;
  if (arr[startIdx] === target) return startIdx;
  if (arr[startIdx] > target)
    return binarySearch(arr.slice(0, startIdx), target);

  const secondHalf = arr.slice(startIdx + 1, arr.length);
  const idxInSecondHalf = binarySearch(secondHalf, target);
  return idxInSecondHalf === -1 ? -1 : startIdx + 1 + idxInSecondHalf;
}

// Time Complexity: O(log n)
// Space Complexity: O(1)
