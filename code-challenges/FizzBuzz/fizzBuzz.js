'use strict';


/**
 * 
 * @param {*} val 
 * @returns string
 */
function fizzBuzzNode(val) {
  if (val % 3 === 0 && val % 5 === 0) {
    return 'FizzBuzz';
  } else if (val % 5 === 0) {
    return 'Buzz';
  } else if (val % 3 === 0) {
    return 'Fizz';
  } else {
    return val.toString();
  }
}
/** 
 * @param {*} tree 
 * @returns tree
 */
function fizzBuzzTree(tree) {
  if (!tree) {
    return 'No tree value';
  }
  let recursive = node => {
    if (node.left) recursive(node.left);
    node.val = fizzBuzzNode(node.val);
    if (node.right) recursive(node.right);
  };
  recursive(tree.tree.root);
  return tree;
}

module.exports = fizzBuzzTree;



