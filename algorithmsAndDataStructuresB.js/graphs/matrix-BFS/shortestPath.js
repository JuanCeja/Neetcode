// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
// The length of a clear path is the number of visited cells of this path.

// Example 1:
// Input: grid = [[0,1],[1,0]]
// Output: 2

// Example 2:
// Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
// Output: 4

// Example 3:
// Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
// Output: -1

const shortestPathBinaryMatrix = (grid) => {
  const n = grid.length;

  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let queue = [[0, 0, 1]];

  while (queue.length) {
    let [row, col, distance] = queue.shift();

    if (row === n - 1 && col === n - 1) return distance;

    for (let [dr, dc] of directions) {
      let newRow = row + dr;
      let newCol = col + dc;

      if (
        newRow >= 0 &&
        newRow < n &&
        newCol >= 0 &&
        newCol < n &&
        grid[newRow][newCol] === 0
      ) {
        grid[newRow][newCol] = 1;
        queue.push([newRow, newCol, distance + 1]);
      }
    }
  }
  return -1;
};

let grid1 = [
  [0, 1],
  [1, 0],
];

let grid2 = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];

let grid3 = [
  [1, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];

console.log(shortestPathBinaryMatrix(grid1)); // 2
console.log(shortestPathBinaryMatrix(grid2)); // 4
console.log(shortestPathBinaryMatrix(grid3)); // -1
