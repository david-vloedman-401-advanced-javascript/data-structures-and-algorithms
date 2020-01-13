'using strict';
/**
 * @class
 */
class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
/**
 * @class
 */
class LinkedList {
  constructor() {
    this.head = null;
  }
  /**
 * 
 * @param val 
 */
  insert(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
  }
  /**
 * 
 * @param val 
 */
  append(val){
    const node = new Node(val, null);    
    let current = this.head;
    while(current !== null){           
      if(current.next === null){        
        current.next = node;
        break;
      }       
      current = current.next;
    }
    
  }
  /**
   * 
   * @param any 
   * @return bool
   */
  includes(val) {
    let current = this.head;
    while (current !== null) {
      if (current.val === val) return true;
      current = current.next;
    }
    return false;
  }
  /**
 *  @return string
 */
  toString() {
    let listString = '';
    let current = this.head;

    while (current !== null) {
      listString = `${listString} -> {${current.val}}`;
      current = current.next;
    }
    return `${listString} -> {NULL}`;
  }
  /**
 * 
 * @param  val 
 * @param  newVal 
 */
  insertBefore(val, newValue) {
    const newNode = new Node(newValue);
    if(this.head.val === val){
      newNode.next = this.head;
      this.head = newNode;      
    } else {
      let current = this.head;
      while (current.next.val !== val) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  }
/**
 * 
 * @param  val 
 * @param newValue 
 */
  insertAfter(val, newValue){
    const newNode = new Node(newValue);
    let current = this.head;
    while(current !== null){
      if(current.val === val){
        newNode.next = current.next;
        current.next = newNode;
      }
      current = current.next;
    }
  }
}



module.exports = LinkedList;

