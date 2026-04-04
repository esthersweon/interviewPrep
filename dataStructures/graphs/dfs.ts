// DFS on a directed graph (in adjacency list format), given a starting node
// e.g. const graph = {
//   "A": ["B", "C", "D"],
//   "B": ["E", "F"],
//   "C": ["G", "H"],
//   "D": ["I", "J"],
//   "E": ["D"],
//   "F": [],
//   "G": [],
//   "H": [],
//   "I": [],
//   "J": [],
// }
// depthFirstSearch(graph, "A"); // ["A", "B", "E", "D", "I", "J", "F", "C", "G", "H"]
export default function depthFirstSearch(
  graph: Record<string, string[]>,
  source: string,
): string[] {
  if (!graph[source]) return [];

  const resultWithDupes = [
    source,
    ...graph[source]
      .filter((child) => child !== source)
      .flatMap((child) => {
        const copiedGraph = { ...graph };
        delete copiedGraph[source];
        return depthFirstSearch(copiedGraph, child);
      }),
  ];

  const result: string[] = [];
  resultWithDupes.forEach((elem) => {
    if (!result.includes(elem)) result.push(elem);
  });
  return result;
}
