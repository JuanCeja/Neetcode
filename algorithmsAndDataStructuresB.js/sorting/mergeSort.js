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


const merge = (left, right) => {
    let p1 = 0;
    let p2 = 0;
    let result = [];
    while (p1 < left.length && p2 < right.length) {
        if (left[p1] < right[p2]) {
            result.push(left[p1]);
            p1++;
        } else {
            result.push(right[p2]);
            p2++;
        }
    }

    while (p1 < left.length) {
        result.push(left[p1]);
        p1++
    };

    while (p2 < right.length) {
        result.push(right[p2]);
        p2++
    };

    return result;
};

const mergeSort = (nums) => {
    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length / 2);
    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid));

    return merge(left, right);
};

console.log(mergeSort([5, 2, 3, 1])); // [1,2,3,5]
console.log(mergeSort([5, 1, 1, 2, 0, 0])); // [0,0,1,1,2,5]