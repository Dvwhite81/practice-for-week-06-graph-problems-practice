// 1. Graph is undirected
// 2. Graph is cyclic
// 3. Nodes are 1s, edges are 0s
// 4. Depth-first search?

function getNeighbors(row, col, graph) {
  let neighbors = [];
  // Check top
  if (graph[row - 1]) {
    if (graph[row - 1][col] === 1) {
      neighbors.push([row - 1, col]);
    }
  }
  // Check bottom
  if (graph[row + 1]) {
    if (graph[row + 1][col] === 1) {
      neighbors.push([row + 1, col]);
    }
  }
  // Check left
  if (graph[row][col - 1]) {
    if (graph[row][col - 1] === 1) {
      neighbors.push([row, col - 1]);
    }
  }
  // Check right
  if (graph[row][col + 1]) {
    if (graph[row][col + 1] === 1) {
      neighbors.push([row, col + 1]);
    }
  }
  // Return neighbors
  return neighbors;
}


function islandSize(row, col, graph) {
  
  // Create a visited set to store visited nodes
  let visited = new Set();
  // Create a stack, put the starting node in the stack
  let startingNode = [row, col];
  let stack = [startingNode];
  // Put the stringified starting node in visited
  let nodeStr = startingNode.toString();
  visited.add(nodeStr);
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length) {
    // Pop the first node
    let first = stack.pop();
    let r = first[0];
    let c = first[1];
    // DO THE THING (increment size by 1)
    if (graph[r][c] === 1) {
      size++;
    }
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    let neighbors = getNeighbors(r, c, graph);
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];
      let str = neighbor.toString();

      if(!visited.has(str)) {
        stack.push(neighbor);
        visited.add(str);
      }
    }
  }
  // return size
  return size;
}

module.exports = [getNeighbors, islandSize];
