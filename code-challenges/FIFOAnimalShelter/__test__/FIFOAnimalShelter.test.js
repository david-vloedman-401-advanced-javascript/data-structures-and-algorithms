'use strict';

const Shelter = require('../FIFOanimalShelter');

describe('Testing the FIFO Animal Shelter', ()=>{

  it('should queue a dog', ()=>{
    const shelter = new Shelter();
    shelter.enqueue('dog');
    expect(shelter.dogs.isEmpty()).toBeFalsy();
  });

  it('should queue a cat', () => {
    const shelter = new Shelter();
    shelter.enqueue('cat');
    expect(shelter.cats.isEmpty()).toBeFalsy();
  });

  it('should queue multiple dogs', () => {
    const shelter = new Shelter();
    shelter.enqueue('dog');
    shelter.enqueue('dog');
    shelter.enqueue('dog');
    expect(shelter.dequeue('dog')).toBe('dog');
    expect(shelter.dequeue('dog')).toBe('dog');
    expect(shelter.dequeue('dog')).toBe('dog');
  });

  it('should queue multiple cats', () => {
    const shelter = new Shelter();
    shelter.enqueue('cat');
    shelter.enqueue('cat');
    shelter.enqueue('cat');
    expect(shelter.dequeue('cat')).toBe('cat');
    expect(shelter.dequeue('cat')).toBe('cat');
    expect(shelter.dequeue('cat')).toBe('cat');
  });

  it('should return null if not given a valid preference to dequeue', ()=>{
    const shelter = new Shelter();
    expect(shelter.dequeue('no pref')).toBeNull();
  });

  it('should dequeue a cat', () => {
    const shelter = new Shelter();
    shelter.enqueue('cat');
    shelter.enqueue('cat');
    shelter.enqueue('cat');
    expect(shelter.dequeue('cat')).toBe('cat');  
  });

  it('should dequeue a dog', () => {
    const shelter = new Shelter();
    shelter.enqueue('dog');
    shelter.enqueue('dog');
    shelter.enqueue('dog');
    expect(shelter.dequeue('dog')).toBe('dog');
  });

  it('should dequeue every animal of a given type', () => {
    const shelter = new Shelter();
    shelter.enqueue('cat');
    shelter.enqueue('cat');
    shelter.enqueue('cat');
    shelter.dequeue('cat');
    shelter.dequeue('cat');
    shelter.dequeue('cat');
    expect(shelter.cats.isEmpty()).toBeTruthy();
  });

});