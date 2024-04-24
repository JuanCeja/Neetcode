// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

// Example 1:
// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

// Example 2:
// Input: stones = [1]
// Output: 1

const lastStoneWeight = (stones) => {
  // sort the array
  let sortedStones = stones.sort((a, b) => a - b);
  let len = stones.length;
  // pointers
  let biggerRock = len - 1;
  let smallerRock = len - 2;
  // while stones.length >= 1
  while (sortedStones.length > 1) {
    if (sortedStones[biggerRock] === sortedStones[smallerRock]) {
      sortedStones = sortedStones.slice(-2);
    } else {
      sortedStones[smallerRock] =
        sortedStones[biggerRock] - sortedStones[smallerRock];
      sortedStones = sortedStones.slice(-1);
    }
  }
  return sortedStones[0] ? sortedStones[0] : 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
console.log(lastStoneWeight([1])); // 1
