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
        [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];

        current = parent;
        parent = Math.floor((current - 1) / 2);
    }

    return this;
  }
}


let myHeap = new Heap();
myHeap.push(7);
myHeap.push(17);
myHeap.push(71);
myHeap.push(23);
myHeap.push(89);
myHeap.push(5);

console.log(myHeap);