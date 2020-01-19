// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Can successfully instantiate an empty queue

'use strict';

const Queue = require('../queue');

describe('Testing functionality of the stack module', ()=>{


  it('can successfully enqueue into a queue', ()=>{
    const queue = new Queue();
    queue.enqueue(100);
    expect(queue.isEmpty()).toBeFalsy();
  });

  it('can successfully enqueue multiple values into a queue', ()=>{
    const queue = new Queue();
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(300);

    expect(queue.peek()).toEqual(100);
  });

  it('can successfully dequeue out of a queue the expected value', ()=>{
    const queue = new Queue();
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(300);
    expect(queue.dequeue()).toEqual(100);
  });

  it('can successfully peek into a queue, seeing the expected value', ()=>{
    const queue = new Queue();
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(300);
    expect(queue.peek()).toEqual(100);
  });

  it('can successfully empty a queue after multiple dequeues', ()=>{
    const queue = new Queue();
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(300);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
    
  });

  it('can successfuly instantiate an empty queue', ()=>{
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
    
  });
});