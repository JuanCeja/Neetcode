// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

const searchMatrix = (matrix, target) => {
    let left = 0;
    let right = matrix.length - 1;
    let lastValue = matrix[0].length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);
        if (target > mid[lastValue]) {
            left = mid;
        } else if (target < mid[lastValue]) {
            right = mid;
        } else {
            return binarySearch(matrix[mid], target);
        }
    }

    return false;
};

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return true;
        } else if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)); // true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)); // false