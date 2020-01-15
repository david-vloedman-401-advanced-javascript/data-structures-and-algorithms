'use strict';

const LinkedList = require('../linkedList');

describe('Testing the K From End method of the linked list class', ()=>{

  const testList = new LinkedList.LinkedList();

  testList.insert(0);
  testList.insert(1);
  testList.insert(2);
  testList.insert(3);
  testList.insert(4);

  it('Should return exception when k is greater than the length of the linked list', ()=>{
    expect(testList.kthFromTheEnd(5)).toBe('Exception');
    expect(testList.kthFromTheEnd(6)).toBe('Exception');
    expect(testList.kthFromTheEnd(100)).toBe('Exception');    
  });

  it('Should return an expection when k and the length of the list are the same ', ()=>{
    expect(testList.kthFromTheEnd(5)).toBe('Exception');
  });

  it('Should return an exception when k is not a positive integer', ()=>{
    expect(testList.kthFromTheEnd(-5)).toBe('Exception');
  });

  const oneList = new LinkedList.LinkedList();
  oneList.insert(1);

  it('Should return a value when the list contains one and k is 0', ()=>{  
    expect(oneList.kthFromTheEnd(0)).toBe(1);
  });

  it('Should return an exception when the list contains one node and k is greater than 1', ()=>{
    expect(oneList.kthFromTheEnd(4)).toBe('Exception');
  });

  it('should return the value of the node k from the end', ()=>{
    expect(testList.kthFromTheEnd(0)).toBe(0);
    expect(testList.kthFromTheEnd(1)).toBe(1);
    expect(testList.kthFromTheEnd(2)).toBe(2);
    expect(testList.kthFromTheEnd(3)).toBe(3);
    expect(testList.kthFromTheEnd(4)).toBe(4);
    
    
  });
});