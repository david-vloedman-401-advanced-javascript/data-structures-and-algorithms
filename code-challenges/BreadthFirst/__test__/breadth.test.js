'use strict';

const breadthFirst = require('../breadthFirst');

const Tree = require('../../../data-structures/tree/tree');

describe('Testing the breadth first traversal function', ()=>{
  it('should do nothing if given an empty list', ()=>{
    const test = new Tree();
    expect(breadthFirst(test)).toEqual([null]);
  });

  it('should return a value of a single node', ()=>{
    const test = new Tree();
    test.add(30);
    expect(breadthFirst(test)).toEqual([30]);
  });

  it('should return the values of multiple nodes', ()=>{
    const test = new Tree();
    test.add(30);
    test.add(40);
    test.add('David');
    test.add(10);

    expect(breadthFirst(test)).toEqual([30, 'David', 40, 10]);
  });
});