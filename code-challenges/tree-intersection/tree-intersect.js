const HashTable = require('../../data-structures/hashTable/hashTable');

/**
 * Function iterates through trees and compares values
 * @param {*} treeOne
 * @param {*} treeTwo
 */
function treeIntersect(treeOne, treeTwo) {
  if (!treeOne.root || !treeTwo.root) return 'Not a valid tree';

  const arr = [];
  const map = new HashTable(1);
  let add;

  let traverse = node => {
    if (node.left) traverse(node.left);
    if (node.val) {
      add = map.add(node.val, node.val);
    }
    if (add === 'Key already being used') arr.push(node.val);
    if (node.right) traverse(node.right);
  };

  traverse(treeOne.root);
  traverse(treeTwo.root);

  return arr;
}

module.exports = treeIntersect;
