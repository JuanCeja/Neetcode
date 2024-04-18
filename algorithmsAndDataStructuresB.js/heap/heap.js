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

  pop() {
    if(this.heap.length <= 1) return [];
    
    [this.heap[this.heap.length - 1], this.heap[0]] = [this.heap[0], this.heap[this.heap.length - 1]];

    this.heap.pop();

    let current = 0;
    let leftChild = Math.floor(current / 2);
    let rightChild = Math.floor((current / 2) + 1);

    while(this.heap[current]) {
        
        if(!this.heap[leftChild] && !this.heap[rightChild]) {
            return this;
        } else if(this.heap[leftChild] && !this.heap[rightChild]) {
            if(this.heap[current] < this.heap[leftChild]) {
                [this.heap[leftChild], this.heap[current]] = [this.heap[current], this.heap[leftChild]];
                current = leftChild;
            }
        }
            // if it only has a left child

                // if it is swap it

                // re initialize current

        // if it has both children

            // swap it with its smaller child

            // re initialize current

}

    // return 
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
