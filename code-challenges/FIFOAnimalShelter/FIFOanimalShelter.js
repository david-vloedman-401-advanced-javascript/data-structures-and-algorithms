'use strict';

const Queue = require('../../data-structures/queue/queue');

/**
 * @class
 */
class FIFOAnimalShelter {
  constructor(){
    this.cats = new Queue();
    this.dogs = new Queue();
  }
  /**
   * 
   * @param animal 
   */
  enqueue(animal){
    switch (animal) {
    case 'dog':
      this.dogs.enqueue(animal);
      return;
    case 'cat':
      this.cats.enqueue(animal);        
      break;    
    default:        
      break;
    } 
  }
  /** 
   * @param pref 
   * @return animal
   */
  dequeue(pref){
    switch (pref) {
    case 'dog':
      return this.dogs.dequeue();
    case 'cat':
      return this.cats.dequeue();
    default:
      return null;
      
    }
  }
}

module.exports = FIFOAnimalShelter;