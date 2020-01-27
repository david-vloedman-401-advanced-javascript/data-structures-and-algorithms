'use strict';

const Tree = require('../../../data-structures/tree/tree');
const fizzBuzz = require('../fizzBuzz');

describe('Testing the FizzBuzzTree function', ()=> {
  it('should turn 3 into Fizz', ()=>{
    const test = new Tree();
    test.add(3);
    const result = fizzBuzz(test);
    expect(result.tree.root.val).toBe('Fizz');
  });
  it('should turn 5 into Buzz', () => {
    const test = new Tree();
    test.add(5);
    const result = fizzBuzz(test);
    expect(result.tree.root.val).toBe('Buzz');
  });

  it('should turn 15 into FizzBuzz', () => {
    const test = new Tree();
    test.add(15);
    const result = fizzBuzz(test);
    expect(result.tree.root.val).toBe('FizzBuzz');
  });

  it('should turn 7 into 7', () => {
    const test = new Tree();
    test.add(7);
    const result = fizzBuzz(test);
    expect(result.tree.root.val).toBe('7');
  });
  
});