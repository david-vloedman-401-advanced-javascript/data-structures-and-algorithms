'use strict';

const Stack = require('../../data-structures/stack/stack');

/**
 * @class 
 */
class MultiBracket {
  constructor(){
    this.square = new Stack();
    this.curly = new Stack();
    this.round = new Stack();
  }

  /**
 * 
 * @param  str 
 * @return bool
 */
  isValid(str){
    let invalid = false;
    const input = [...str];
    input.forEach(char => {
      invalid = !this.checkBracket(char);
    });
    
    return this.square.isEmpty() && this.curly.isEmpty() && this.round.isEmpty() && !invalid;
  }



  /**
   * 
   * @param char 
   * @return bool
   * @return null
   */
  checkBracket(char){
    

    switch (true) {
    case char === '{':
      this.curly.push(char);        
      return true;
    case char === '[':
      this.square.push(char);
      return true;
    case char === '(':
      this.round.push(char);
      return true;

    case char === '}' && this.curly.isEmpty():      
      return false;      
    case char === '}':      
      this.curly.pop();
      return true;

    case char === ']' && this.square.isEmpty():
      return false;
    case char === ']':
      this.square.pop();
      return true;


    case char === ')' && this.round.isEmpty():
      return false;
    case char === ')':
      this.round.pop();
      return true;

    default:      
      return true;
    }
  }
}

module.exports = MultiBracket;