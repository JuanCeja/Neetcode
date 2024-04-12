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
    // intialize an empty result verstor ans

    // define a helper function that takes parameters for the current subet (op), the input array nums and the current index

    // in the base case when startIndex equals the size of the input array, add the current subset op to the result array

    // in the recursive case: 

        // make a choice to include the current element at startIndex in the subset and recursively call helper with the updated subset and index

        // backtrack by removing the last addded element at startindex from the subset and recursively call helper with the update index

};

console.log(subsets([1,2,3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]