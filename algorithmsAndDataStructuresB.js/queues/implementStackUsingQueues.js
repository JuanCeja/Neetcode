// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.


class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class MyStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    push(data) {
        let newTop = new StackNode(data);

        if (!this.top) {
            this.top = newTop;
            this.bottom = newTop;
        } else {
            newTop.next = this.top;
            this.top = newTop;
        }
        this.size++;
    }

    pop() {
        if(!this.top) return null;

        let oldTop = this.top;
        this.top = this.top.next;
        oldTop.next = null;
        this.size--;
        return oldTop.data;
    }

    getTop() {
        if(!this.top) return null;
        else return this.top;
    }

    empty() {
        return this.size === 0;
    }
}