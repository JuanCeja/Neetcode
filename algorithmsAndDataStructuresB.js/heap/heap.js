class Heap {
  constructor() {
    this.heap = new Array();
    this.heap.push(0);
  }

  push(val) {
    if (this.heap.length <= 1) return this.heap.push(val);

    this.heap.push(val);

    let current = this.heap.length - 1;
    let parent = Math.floor(current / 2);

    while (this.heap[current] > this.heap[parent]) {
      [this.heap[current], this.heap[parent]] = [
        this.heap[parent],
        this.heap[current],
      ];

      current = parent;
      parent = Math.floor((current - 1) / 2);
    }

    return this;
  }

  removeRoot() {
    if (this.heap.length <= 1) return [];

    [this.heap[this.heap.length - 1], this.heap[0]] = [
      this.heap[0],
      this.heap[this.heap.length - 1],
    ];

    this.heap.pop();
    this.heap.unshift(null);

    let current = 0;
    let leftChild, rightChild;
    let len = this.heap.length;

    while (current < len) {
      leftChild = current * 2 + 1;
      leftChild = current * 2 + 2;

      if (leftChild >= len) break;

      let swapIndex =
        rightChild < len && this.heap[rightChild] > this.heap[leftChild]
          ? rightChild
          : leftChild;

      if (this.heap[current] < this.heap[swapIndex]) {
        [this.heap[current], this.heap[swapIndex]] = [
          this.heap[swapIndex],
          this.heap[current],
        ];
        current = swapIndex;
      } else break;
    }
    return this;
  }

  printTree() {
    if (this.heap.length === 0) {
      console.log("Heap is empty.");
      return;
    }

    const queue = [];
    queue.push(0);

    const levels = Math.ceil(Math.log2(this.heap.length + 1));
    const maxWidth = 2 ** levels * 2;

    let level = 0;

    while (queue.length > 0) {
      const levelSize = queue.length;

      const indentSpace = maxWidth / 2 ** (level + 1);

      let levelOutput = "";
      for (let i = 0; i < levelSize; i++) {
        const index = queue.shift();

        levelOutput += " ".repeat(indentSpace) + this.heap[index];

        const leftIndex = 2 * index + 1;
        const rightIndex = 2 * index + 2;

        if (leftIndex < this.heap.length) {
          queue.push(leftIndex);
        }
        if (rightIndex < this.heap.length) {
          queue.push(rightIndex);
        }

        levelOutput += " ".repeat(indentSpace * 2);
      }
      console.log(levelOutput);
      level++;
    }
  }
}

let myHeap = new Heap();
myHeap.push(7);
myHeap.push(17);
myHeap.push(71);
myHeap.push(23);
myHeap.push(89);
myHeap.push(5);
myHeap.push(115);
myHeap.printTree();
myHeap.removeRoot();
myHeap.printTree();
