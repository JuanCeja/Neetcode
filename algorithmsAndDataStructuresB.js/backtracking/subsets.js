// Given an integer array nums of unique elements, return all possible
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

const subsets = (arr) => {
  let result = [];
  const n = arr.length;

  function helper(currentSubset, startIndex){
    if(startIndex === n) {
      result.push(currentSubset.slice());
      return;
    }

    currentSubset.push(arr[startIndex]);
    helper(currentSubset, startIndex + 1);

    currentSubset.pop();

    helper(currentSubset, startIndex + 1);
  }

  helper([], 0);
  return result;

};

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
