'use strict';

const Stack = require('../stack/stack');
/**
 * @class
 */
class PseudoQueue {
  constructor(){
    this.inbox = new Stack();
    this.outbox = new Stack();
  }
  /**
   * Adds a node to the queue with the give value
   * @param val 
   */
  enqueue(val){
    this.inbox.push(val);
  }
  /**
   * Removes the node from the front of the queue and returns its value
   * @return val
   */
  dequeue(){
    
    if(this.outbox.isEmpty()){      
      while(!this.inbox.isEmpty()){
        this.outbox.push(this.inbox.pop());
      }      
    }
    return this.outbox.pop();
  }
}

module.exports = PseudoQueue;