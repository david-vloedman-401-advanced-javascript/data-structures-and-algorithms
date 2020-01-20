'use strict';

const Node = require('../node/node');
/**
 * @class
 */
class Stack {
  constructor(){
    this.top = null;
  }

  /**
   * Pushes a value onto the stack
   * @param {*} val 
   */
  push(val){
    const node = new Node(val);
    node.next = this.top;
    this.top = node;
  }


  /**
   * Removes the top node from the stack and returns its value
   * @return val
   */
  pop(){
    const node = this.top;
    this.top = this.top.next;
    return node.val;
  }

  /**
   * Returns the value of the node on top of the stack while leaving the node in position
   */
  peek(){
    return this.isEmpty()? null : this.top.val;
  }

  /**
   * Checks to see if the stack is empty
   * @return bool
   */
  isEmpty(){
    return (this.top === null);
  }
}


module.exports = Stack;