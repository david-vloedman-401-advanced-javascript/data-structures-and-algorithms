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
 * Inserts a new node on the head of the list
 * @param val 
 */
  insert(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
  }
  /**
 * Appends a new node to the end of the list
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
   * Checks to see if a node with the given value exists within the list
   * @param val
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
  * Turns the values of each node in the list to a string
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
 * Inserts a node with the new value after the node that has the given value
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
 * Inserts a node with the new value after the node with the given value
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
  
  /**
 * Returns the value of the node 'k'th from the end
 * @param  k 
 * @return value
 */
  kthFromTheEnd(k){
    let current = this.head;
    const values = [];
    while(current !== null){
      values.push(current.val);
      current = current.next;
    }
    
    if(k > values.length -1 || k < 0) return 'Exception';
    let index = (values.length - k) -1;    
    return values[index];
  }
}

module.exports = LinkedList;

