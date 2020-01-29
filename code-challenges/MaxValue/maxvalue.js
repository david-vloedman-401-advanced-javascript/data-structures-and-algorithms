'use strict';

const Tree = require('../../data-structures/tree/tree');

/**
 * @class
 */
class MaxTree extends Tree {
  constructor(){
    super();
  }
  /**
   * @returns number
   */
  maxValue(){
    let currentHighest = null;
    this.tree.root.inOrder(val => {
      if(!currentHighest) currentHighest = val;
      if(val > currentHighest) currentHighest = val;
    });
    return currentHighest;
  }
}

module.exports = MaxTree;





