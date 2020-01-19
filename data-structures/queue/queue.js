'use strict';

const Node = require('../node/node');
/**
 * A class for creating a queue object
 * @class
 */
class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  /**
   * Add a node to the end of the queue
   * @param {*} node 
   */
  enqueue(val){
    const node = new Node(val);
    if(this.isEmpty) this.front = node;
    node.next = this.rear;
    this.rear = node;
  }
  /**
   * Remove a node from the front of the queue
   * @return node
   */
  dequeue(){
    const node = this.front;
    this.front = node.next;
    node.next = null;
    return node.val;
  }

  peek(){
    return this.front.val;
  }

  isEmpty(){
    return (this.front === null);
  }
}



module.exports = Queue;