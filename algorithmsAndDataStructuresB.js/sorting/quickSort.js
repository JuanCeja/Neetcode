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

const quickSort = (array, start = 0, end = array.length - 1) => {
    if (end - start + 1 <= 1) return array;

    let pivot = array[end];
    let left = start;

    for (let i = start; i < end; i++) {
        if (array[i] < pivot) {
            [array[i], array[left]] = [array[left], array[i]]
            left++;
        }
    }

    array[end] = array[left];
    array[left] = pivot;

    quickSort(array, start, left - 1);
    quickSort(array, left + 1, end);

    return array;
};

console.log(quickSort([5, 2, 3, 1])); // [1,2,3,5]
console.log(quickSort([5, 1, 1, 2, 0, 0])); // [0,0,1,1,2,5]