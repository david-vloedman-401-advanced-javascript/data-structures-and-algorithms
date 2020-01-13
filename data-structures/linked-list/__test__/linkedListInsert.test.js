'use strict';

const LinkedList = require('../linkedList');

describe('Testing the second set of methods implemented in LinkedList part 2 challenge', ()=>{
  const myList = new LinkedList();
  myList.insert(1);
  myList.insert(2);
  myList.insert(3);
  myList.insert(4);
  

  it('should append a node to the end of the list', ()=>{
    myList.append(5);
    expect(myList.toString()).toBe(
      ' -> {4} -> {3} -> {2} -> {1} -> {5} -> {NULL}',
    );
  });
});