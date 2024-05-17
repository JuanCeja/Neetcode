const dfs = (grid, r, c, visit) => {
  let ROWS = grid.length,
    COLS = grid[0].length;

  if (
    Math.min(r, c) < 0 ||
    r >= ROWS ||
    c >= COLS ||
    grid[r][c] === 1 ||
    visit.has(`${r}, ${c}`)
  ) {
    return 0;
  }

  if (r === ROWS - 1 && c === COLS - 1) return 1;

  visit.add(`${r}, ${c}`);

  let count = 0;
  count += dfs(grid, r - 1, c, visit);
  count += dfs(grid, r + 1, c, visit);
  count += dfs(grid, r, c - 1, visit);
  count += dfs(grid, r, c + 1, visit);

  visit.delete(`${r}, ${c}`);

  return count;
};

const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

let visit = new Set();

console.log(dfs(grid, 0, 0, visit));
