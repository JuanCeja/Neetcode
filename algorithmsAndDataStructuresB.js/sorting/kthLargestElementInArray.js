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
    // count variable
    let count = k;
    let mySet = new Set();

    // iterate the nums array
    for(num of nums) {
        // if value does not exist in set add it to set
        if(!mySet.has(num)) {
            mySet.add(num);
        }
    }

    // iterate the set
    mySet.forEach(value => {
        console.log(value)
        // if our counter === k 
        if(count === k) return value;
        count++;
    })
            // return that value
        // increment counter

}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4