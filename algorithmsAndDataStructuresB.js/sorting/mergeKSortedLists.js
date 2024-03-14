// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.


// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6


// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    mergeSort(this, l1, l2) {

    }

    mergeKLists() {

    }
}

console.log(mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6]])); // [1,1,2,3,4,4,5,6]
console.log(mergeKLists([[]])); // []