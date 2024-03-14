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
    }

    append(data) {
        let newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    mergeList(l1, l2) {
        const dummy = new Node(0);

        let temp = dummy;
        while (l1 !== null && l2 !== null) {
            if (l1.data < l2.data) {
                temp.next = l1;
                l1 = l1.next;
            } else {
                temp.next = l2;
                l2 = l2.next;
            }
            temp = temp.next;
        }

        if (l1 !== null) temp.next = l1;
        if (l2 !== null) temp.next = l2;

        return dummy.next;
    }

    mergeKLists(lists) {
        if (!lists.length) return null;

        while (lists.length > 1) {
            let a = lists.shift();
            let b = lists.shift();
            const h = this.mergeList(a, b);
            lists.push(h);
        }
        return lists[0];
    }
}

let myLinkedList = new LinkedList();

let list1 = new LinkedList();
[1, 4, 5].forEach(data => list1.append(data));

let list2 = new LinkedList();
[1, 3, 4].forEach(data => list2.append(data));

let list3 = new LinkedList();
[2, 6].forEach(data => list3.append(data));

console.log(myLinkedList.mergeKLists([list1, list2, list3])); // [1,1,2,3,4,4,5,6]
console.log(myLinkedList.mergeKLists([[]])); // []