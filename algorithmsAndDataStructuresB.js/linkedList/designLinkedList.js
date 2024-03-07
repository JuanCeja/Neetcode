// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.

// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.

// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.

// void addAtTail(int val) Append a node of value val as the last element of the linked list.

// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.

// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get(index) {
        if (index >= this.length) return -1;

        let counter = 0;
        let current = this.head;
        while (current) {
            if (counter === index) return current.val;
            current = current.next;
            counter++;
        }
    }

    addAtHead(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    addAtTail(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        };
        this.length++;
        return this;
    }

    addAtIndex(index, val) {
        if (index === 0) return this.addAtHead(val);
        if (index === this.length) return this.addAtTail(val);
        if (index > this.length) return;

        let newNode = new Node(val);
        let prevNode = null;
        let current = this.head;
        let counter = 0;

        while (counter < index) {
            prevNode = current;
            current = current.next;
            counter++;
        }
        
        newNode.next = current;
        newNode.prev = prevNode;
        prevNode.next = newNode;
        this.length++;
        return this;
    }

    deleteAtIndex(index) {
        // counter = index;
        // if index > length or < 0 return false
        // iterate our linked list. while linked list is >= 0
            // move current up
            // remove from counter
        // make our deletion here
        // reduce our length
        // return our list
    }
}