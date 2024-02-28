// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.


// Example 1:
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    };

    minStack() {

    };

    push(val) {
        let length = this.minStack.length;
        let min = this.minStack[length - 1];
        this.stack.push(val);
        if (!this.minStack.length) this.minStack.push(val);
        else if (val <= min) this.minStack.push(val);
        else this.minStack.push(min);
    };

    pop() {
        this.stack.pop();
        this.minStack.pop();
    };

    intTop() {
        let topValue = this.stack.length - 1;
        return this.stack[topValue];
    };

    intGetMin() {
        let minValue = this.minStack.length - 1;
        return this.minStack[minValue];
    };
}

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2