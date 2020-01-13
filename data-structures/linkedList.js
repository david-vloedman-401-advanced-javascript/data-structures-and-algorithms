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

  append(val){
    const node = new Node(val, null);    
    let current = this.head;
    while(current !== null){           
      if(current.nxt === null){        
        current.nxt = node;
        break;
      }       
      current = current.nxt;
    }
    
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

  insertBefore(val, newVal){
    let current = this.head;
    const newNode = new Node(newVal, null);
    while(current !== null){
      if(current.val === val){        
        newNode.nxt = current.nxt;
        current.nxt = newNode;          
      }
      current = current.nxt;
    }
  }
}

// .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node

module.exports = LinkedList;

const myList = new LinkedList();

myList.insert(1);
myList.insert(2);
myList.insert(3);
myList.insert(4);
myList.insert(5);

myList.insertBefore(3, 18);

console.log(myList.toString());