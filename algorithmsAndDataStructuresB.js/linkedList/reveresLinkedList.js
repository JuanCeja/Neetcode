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
        // current and pointers
        let current;
        let p1 = list1.head;
        let p2 = list2.head;
        // compare both heads
        if(p1 === p2) {
            current = p1;
            p1 = p1.next;
        } else {
            current = Math.min(p1, p2);
        }
        // while both pointers
        while(p1 && p2) {
            // if p1 < p2
            if(p1 < p2) {

            }
        }
                // current.next = p1
                // move p1 up
            // else if p2 < p1
                // current.next = p2;
                // move p2 up
        // return list;
            
    };
}