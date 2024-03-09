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
        if(!this.head) return null;

        let current = this.head;
        let prev = null;
        let next = current ? current.next : null;
        this.tail = current;

        while(current) {
            current.next = prev;
            prev = current;
            current = next;
            next = current.next;
        }

        this.head = prev;
        return this;
    };

    mergeTwoSortedLists(list1, list2) {
        let dummyHead = new ListNode();
        let current = dummyHead;
        let p1 = list1.head;
        let p2 = list2.head;

        while (p1 && p2) {
            if (p1.val < p2.val) {
                current.next = p1;
                p1 = p1.next;
            } else {
                current.next = p2;
                p2 = p2.next;
            };
            current = current.next;
        };

        current.next = p1 || p2;

        return new LinkedList(dummyHead.next);
    };
}