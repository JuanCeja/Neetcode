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
        if (index < 0 || index >= this.length) return -1;

        let current = this.head;
        let counter = 0;
        while (current !== index) {
            current = current.next;
            counter++;
        }
        return current.val;
    }

    addAtHead(val) {
        const newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    addAtTail(val) {
        const newNode = new Node(val);
        if (!this.length) {
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
        if (index < 0 || index > this.length) return;
        if (index === 0) return this.addAtHead(val);

        if (index === 0) {
            this.addAtHead(val);
        } else if(index === this.length) {
            this.addAtTail(val);
        } else {
            const newNode = new Node(val);
            let counter = 0;
            let current = this.head;

            while (counter !== index) {
                current = current.next;
                counter++;
            }

            newNode.prev = current.prev;
            newNode.next = current;
            current.prev.next = newNode;
            current.prev = newNode;
            this.length++;
            return this;
        }
    }

    deleteAtIndex(index) {
        let counter = index;
        let current = this.head;

        if (index >= this.length || index < 0) return false;
        if (index === 0) return null;

        while (counter > 0) {
            current = current.next;
            counter--;
        }

        let prevNode = current.prev;
        let nextNode = current.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        current.next = null;
        current.prev = null;
        this.length--;

        return this;
    }
}