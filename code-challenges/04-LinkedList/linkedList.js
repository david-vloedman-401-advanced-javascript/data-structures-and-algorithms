'using strict';

class Node {
  constructor(val, nxt) {
    this.val = val;
    this.nxt = nxt;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    const node = new Node(val);
    node.nxt = this.head;
    this.head = node;
  }

  includes(val) {
    let current = this.head;
    while (current !== null) {
      if (current.val === val) return true;
      current = current.nxt;
    }
    return false;
  }

  toString() {
    let listString = '';
    let current = this.head;

    while (current !== null) {
      listString = `${listString} -> {${current.val}}`;
      current = current.nxt;
    }
    return `${listString} -> {NULL}`;
  }
}