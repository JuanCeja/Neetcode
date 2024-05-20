// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

const numberOfIslands = (grid) => {
  let countOfIslands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        countOfIslands += 1;
        teraform(i, j, grid);
      }
    }
  }
  return countOfIslands;
};

const teraform = (r, c, grid) => {
  if(grid[r] === undefined || grid[r][c] === undefined || grid[r][c] === "0") return; 

  grid[r][c] = "0";

  teraform(r - 1, c, grid);
  teraform(r + 1, c, grid);
  teraform(r, c - 1, grid);
  teraform(r, c + 1, grid);
};

const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numberOfIslands(grid1)); // 1
console.log(numberOfIslands(grid2)); // 3
