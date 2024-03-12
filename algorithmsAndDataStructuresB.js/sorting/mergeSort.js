// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.


// Example 1:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).


// Example 2:
// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

// merge helper function
const merge = (left, right) => {
    // pointers
    // result
    // while pointers both in range
    // if left < push left move pointer
    // if right < push right move pointer
    // push remaining values
    // return result
};

const mergeSort = (nums) => {
    // create our mid point
    // call merge sort on our left and right halfs
    // return our merged left and right halfs
};

console.log(mergeSort([5, 2, 3, 1])); // [1,2,3,5]
console.log(mergeSort([5, 1, 1, 2, 0, 0])); // [0,0,1,1,2,5]