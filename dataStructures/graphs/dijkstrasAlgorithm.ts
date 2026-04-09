import MinHeapForDijkstras from "../heaps/minHeapForDijkstras";

// Given a distanceed directed graph (represented as an adjacency list) and a source node,
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
  const distances: Record<string, number> = {};
  const minHeap = new MinHeapForDijkstras();

  for (const vertex in graph) {
    const distance = vertex === source ? 0 : Infinity;
    // Initialize distances for every vertex
    distances[vertex] = distance;
    // Insert the vertex and distance into the min heap
    minHeap.insert({ vertex, distance });
  }

  const visitedVertices = new Set();

  while (!minHeap.isEmpty()) {
    // Get unvisited `vertex` with the smallest distance
    const min = minHeap.delete();
    if (!min) continue;
    if (!min || visitedVertices.has(min.vertex)) continue;

    // Mark `vertex` as visited
    visitedVertices.add(min.vertex);

    // Maybe update the distance to get to each neighbor of vertex
    for (const neighbor in graph[min.vertex]) {
      const updatedDistance =
        distances[min.vertex] + graph[min.vertex][neighbor];
      if (updatedDistance < distances[neighbor]) {
        distances[neighbor] = updatedDistance;
        minHeap.insert({ vertex: neighbor, distance: updatedDistance });
      }
    }
  }

  return distances;
}
