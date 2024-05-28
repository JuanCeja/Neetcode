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
  let freshOranges = 0;
  let seconds = 0;
  let queue = [];

  const directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 2) queue.push([r, c, 0]);
      else if (grid[r][c] === 1) freshOranges++;
    }
  }

  while (queue.length) {
    let [r, c, time] = queue.shift();
    seconds = Math.max(seconds, time);

    for (let [dr, dc] of directions) {
      let newRow = r + dr;
      let newCol = c + dc;

      if (
        newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[0].length &&
        grid[newRow][newCol] === 1
      ) {
        grid[newRow][newCol] = 2;
        freshOranges--;
        queue.push([newRow, newCol, seconds + 1]);
      }
    }
  }

  return freshOranges === 0 ? seconds : -1;
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
