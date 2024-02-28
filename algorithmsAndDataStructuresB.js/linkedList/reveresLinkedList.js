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
        let prev = null;
        let nxt;
        let newTail = this.head;

        while (current) {
            nxt = current.next;
            current.next = prev;
            prev = current;
            current = nxt;
        }

        this.head = prev;
        this.tail = newTail;
        return this;
    }
}