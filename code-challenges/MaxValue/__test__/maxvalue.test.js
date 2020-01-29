'use strict';


const Tree = require('../maxvalue');

describe('Testing the method maxValue that is extended off the binary tree class', ()=>{
  it('should return the highest value in the tree', ()=>{
    const test = new Tree();
    test.add(20);
    test.add(25);
    test.add(100);
    test.add(65);
    expect(test.maxValue()).toEqual(100);
  });

  it('should return the val of the only node in the tree', ()=> {
    const test = new Tree();
    test.add(20);
    expect(test.maxValue()).toEqual(20);
  });

  it('should return null when the tree is empty', ()=>{
    const test = new Tree();    
    expect(test.maxValue()).toBeNull();
  });

  it('should return the highest value in a tree of negative #',()=>{
    const test = new Tree();
    test.add(-1);
    test.add(-24);
    test.add(-200);
    test.add(-420);

    expect(test.maxValue()).toEqual(-1);
  });
});