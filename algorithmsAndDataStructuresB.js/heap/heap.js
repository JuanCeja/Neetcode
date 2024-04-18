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
    }

    return this;
  }
}
