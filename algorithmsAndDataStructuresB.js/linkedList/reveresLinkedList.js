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
        let current;
        let p1 = list1.head;
        let p2 = list2.head;

        if (p1.val === p2.val) {
            current = p1;
            p1 = p1.next;
        } else if (p1.val < p2.val) {
            current = p1;
        } else current = p2;

        while (p1 && p2) {
            if (p1.val < p2.val) {
                current.next = p1;
                current = p1;
                p1 = p1.next;
            } else {
                current.next = p2;
                current = p2;
                p2 = p2.next;
            }
        }

        if (p1) current.next = p1;
        if (p2) current.next = p2;

        return this;
    };
}