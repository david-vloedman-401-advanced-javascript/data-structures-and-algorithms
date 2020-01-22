'use strict';

const PseudoQueue = require('../pseudoQueue');

describe('Testing the pseudoQueue class and its methods', ()=>{
  it('should successfully add an item to the queue', ()=> {
    const queue = new PseudoQueue();
    queue.enqueue(100);

    expect(queue.inbox.isEmpty()).toBeFalsy();
  });

  it('should successfully add multiple items to the queue', ()=>{
    const queue = new PseudoQueue();
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(300);

    expect(queue.dequeue()).toEqual(100);
    expect(queue.dequeue()).toEqual(200);
    expect(queue.dequeue()).toEqual(300);
  });

  it('should successfully dequeue an item', ()=> {
    const queue = new PseudoQueue();
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(300);

    expect(queue.dequeue()).toEqual(100);
  });

  it('should successfully dequeue many items', () => {
    const queue = new PseudoQueue();
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(300);

    expect(queue.dequeue()).toEqual(100);
    expect(queue.dequeue()).toEqual(200);
    expect(queue.dequeue()).toEqual(300);
  });

  it('should successfully instantiate an empty queue', ()=>{
    const queue = new PseudoQueue();
    expect(queue.inbox.isEmpty());
    expect(queue.outbox.isEmpty());
  });

  it('should successfully dequeue many items to empty the queue', ()=>{
    const queue = new PseudoQueue();
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(300);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.dequeue()).toBeNull();
  });
});