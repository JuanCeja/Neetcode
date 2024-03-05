class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    };

    reverse() {
        let current = this.head;
        let prev = null;
        let next = current ? current.next : null;
        this.tail = current
        while (current) {
            current.next = prev;
            prev = current;
            current = next;
            next = current.next;
        }
        this.head = prev;
        return this;
    };

    mergeTwoSortedLists(list1, list2) {
        
    };
}