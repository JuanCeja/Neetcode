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

    reverseRecursive() {
        var reverseList = function(head) {
            // Special case...
            // Create a new node to call the function recursively and we get the reverse linked list...
            // Set head node as head.next.next...
            //set head's next to be null...
             // Return the reverse linked list...
        };
    }
}