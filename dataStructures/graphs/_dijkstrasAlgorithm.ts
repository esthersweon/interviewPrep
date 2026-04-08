// Given a weighted directed graph (nodes and weighted edges) represented as an adjacency list and a source node,
// find the shortest path distances from the source node to all other nodes in the graph.
// const graph1 = {
//     A: { B: 1, C: 4 },
//     B: { E: 3, F: 2 },
//     C: { G: 2 },
//     D: { C: 3, J: 5 },
//     E: { D: 2 },
//     F: {},
//     G: { H: 1 },
//     H: { F: 4, J: 3 },
//     I: {},
//     J: {},
//   };

//   dijkstra(graph1, 'A'); // Returns { A: 0, B: 1, C: 4, D: 6, E: 4, F: 3, G: 6, H: 7, I: Infinity, J: 10 }

export default function dijkstra(
  graph: Record<string, Record<string, number>>,
  source: string,
): Record<string, number> {
  throw "Not implemented!";
}
