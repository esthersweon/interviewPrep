### Search

|            | Description                                                                                     | Time complexity | Space complexity |
| ---------- | ----------------------------------------------------------------------------------------------- | --------------- | ---------------- |
| **Binary** | Requires sorted array; Compare target to middle element; Search again in left or right subarray | O(log n)        | O(1)             |
| **Linear** | Checks every element in a list one by one until a match is found                                | O(n)            | O(1)             |

### Sort

_NOTE_: A stable sorting algorithm preserves the original relative order of records with equal values (crucial for multi-level sorting).

|               | Description                                                                                                                                                                                                | Time complexity | Space complexity | Stable? |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------------- | ------- |
| **Bubble**    | Compare adjacent elements and swap as needed                                                                                                                                                               | O(n^2)          | O(1)             | ✓       |
| **Heap**      | Build a max-heap to extract the max element repeatedly; Places max at the end of the array; Rebuilds heap until sorted                                                                                     | O(n logn)       | O(1)             |         |
| **Insertion** | Compare new elements to existing sorted ones and insert in the correct position                                                                                                                            | O(n^2)          | O(1)             | ✓       |
| **Merge**     | **Divide** (split array), **Conquer** (repeat recursively until you have 1-element arrays), **Merge** (merge sub-lists by comparing smallest elements from each sub-list and ordering them in a new array) | O(n logn)       | O(n)             | ✓       |
| **Quick**     | Select pivot; Partition array (elements < pivot are on the left; elements >= pivot are on the right); Recursively apply same process to the sub-arrays                                                     | O(n logn)       | O(log n)         |         |
| **Selection** | Repeatedly find min value from unsorted part of array and move to the start                                                                                                                                | O(n^2)          | O(1)             |         |
