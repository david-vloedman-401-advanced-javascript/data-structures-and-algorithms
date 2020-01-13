'use strict';

const LinkedList = require('../linkedList');

describe('Testing the second set of methods implemented in LinkedList part 2 challenge', () => {
  const myList = new LinkedList();
  

  it('should be able to append multiple nodes', ()=> {
    myList.insert(1);
    myList.insert(2);
    myList.insert(3);
    myList.insert(4);
    expect(myList.toString()).toBe(
      ' -> {4} -> {3} -> {2} -> {1} -> {NULL}',
    );
  });

  it('should append a node to the end of the list', () => {
    myList.append(5);
    expect(myList.toString()).toBe(
      ' -> {4} -> {3} -> {2} -> {1} -> {5} -> {NULL}',
    );
  });

  it('should add a new node before the middle of the list', () => {
    myList.insertBefore(2, 10);
    expect(myList.toString()).toBe(
      ' -> {4} -> {3} -> {10} -> {2} -> {1} -> {5} -> {NULL}',
    );
  });

  it('should add a new node before the head of the list', () => {
    myList.insertBefore(5, 25);
    expect(myList.toString()).toBe(
      ' -> {4} -> {3} -> {10} -> {2} -> {1} -> {25} -> {5} -> {NULL}',
    );
  });

  it('should add a new node before the end of the list', () => {
    myList.insertBefore(4, 50);
    expect(myList.toString()).toBe(
      ' -> {50} -> {4} -> {3} -> {10} -> {2} -> {1} -> {25} -> {5} -> {NULL}',
    );
  });

  it('should add a new node after a node in the middle of the list', () => {
    myList.insertAfter(10, 600);
    expect(myList.toString()).toBe(
      ' -> {50} -> {4} -> {3} -> {10} -> {600} -> {2} -> {1} -> {25} -> {5} -> {NULL}',
    );
  });

  it('should add a new node after the last node in the list', () => {
    myList.insertAfter(50, 300);
    expect(myList.toString()).toBe(
      ' -> {50} -> {300} -> {4} -> {3} -> {10} -> {600} -> {2} -> {1} -> {25} -> {5} -> {NULL}',
    );
  });
});
