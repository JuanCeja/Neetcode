// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

// Example 2:
// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// Example 3:
// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

const orangesRotting = (grid) => {
  let seconds = 0;
  let queue = [[0, 0, 0]];

  if (grid[0][0] === 0) return 0;

  const directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];

  while (queue.length) {
    let [r, c, seconds] = queue.shift();

    for (let [dr, dc] of directions) {
      let newRow = r + dr;
      let newCol = c + dc;

      if (
        newRow >= 0 &&
        newRow <= grid.length - 1 &&
        newCol >= 0 &&
        newCol <= grid.length - 1 &&
        grid[newRow][newCol] === 1
      )
        queue.push([newRow, newCol, seconds + 1]);
    }
  }

  for (let row of grid) {
    for (let col of grid) {
      if (grid[row][col] === 1) return -1;
    }
  }

  return seconds;
};

let grid1 = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
let grid2 = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];
let grid3 = [[0, 2]];

console.log(orangesRotting(grid1)); // 4
console.log(orangesRotting(grid2)); // -1
console.log(orangesRotting(grid3)); // 0
