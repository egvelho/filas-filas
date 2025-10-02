class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  enqueue(value) {}
  dequeue() {}
  isEmpty() {}
  clear() {}
  peek() {}
}
