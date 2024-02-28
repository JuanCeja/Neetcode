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
    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let next = current.next;
        let pointer = next.next;
        // iterate the linkedList
        while (pointer.next !== null) {
            // as we iterate we point the next to our current
            next.next = current;
            current = next;
            next = current.next;
            pointer = next.next;
        }
        // return our linked list
    }
}