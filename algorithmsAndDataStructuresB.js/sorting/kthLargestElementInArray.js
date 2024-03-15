// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4


const findKthLargest = (nums, k) => {
    k = nums.length - k;

    const quickSelect = (l, r) => {
        let pivot = nums[r];
        let pointer = l;

        for (let i = l; i < r; i++) {
            if (nums[i] < pivot) {
                [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
                pointer++;
            }
        }
        [nums[r], nums[pointer]] = [nums[pointer], nums[r]];

        if (k < pointer) return quickSelect(l, pointer - 1)
        else if (k > pointer) return quickSelect(pointer + 1, r)
        else return nums[pointer];
    }

    return quickSelect(0, nums.length - 1);
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4