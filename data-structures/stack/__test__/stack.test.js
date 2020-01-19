'use strict';

const Stack = require('../stack');

describe('Testing functionality of the Stack module', ()=>{
  it('can successfully push onto a stack', ()=>{
    const stack = new Stack();
    stack.push(100);
    expect(stack.isEmpty()).toBeFalsy();
  });

  it('can successfully push multiple values onto a stack', ()=>{
    const stack = new Stack();
    stack.push(100);
    stack.push(200);
    stack.push(300);

    expect(stack.pop()).toEqual(300);
    expect(stack.pop()).toEqual(200);
    expect(stack.pop()).toEqual(100);
  });

  it('can successfully pop off the stack', ()=>{
    const stack = new Stack();
    stack.push(100);
    stack.push(200);
    stack.push(300);

    expect(stack.pop()).toEqual(300);
    expect(stack.pop()).toEqual(200);
    expect(stack.pop()).toEqual(100);
  });

  it('can successfully empty a stack after multiple pops', ()=>{
    const stack = new Stack();
    stack.push(100);
    stack.push(200);
    stack.push(300);

    expect(stack.pop()).toEqual(300);
    expect(stack.pop()).toEqual(200);
    expect(stack.pop()).toEqual(100);
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('can successfully peek the next item on the stack', ()=>{
    const stack = new Stack();
    stack.push(100);
    stack.push(200);
    stack.push(300);

    expect(stack.pop()).toEqual(300);
    expect(stack.pop()).toEqual(200);
    expect(stack.peek()).toEqual(100);
  });

  it('can successfully instantiate an empty stack', ()=>{
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
  });

  
});