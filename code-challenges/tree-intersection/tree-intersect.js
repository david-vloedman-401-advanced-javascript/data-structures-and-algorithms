const HashTable = require('../../data-structures/hash-table/hash-table');

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
    if (add === 'Duplicate key') arr.push(node.val);
    if (node.right) traverse(node.right);
  };

  traverse(treeOne.root);
  traverse(treeTwo.root);

  return arr;
}


/**
 * @class
 * @description Node to be inserted into Binary Tree
 */
class BinaryTreeNode {
  constructor(val, left, right) {
    this.val = val || null;
    this.left = left || null;
    this.right = right || null;
  }
}

/**
 * @class
 * @description Binary Tree Class
 */
class BinaryTree {
  constructor(node) {
    this.root = node || null;
  }

  /**
   * @description Returns array of current nodes in tree in preOrder
   */
  preOrder() {
    let results = [];

    let recursive = node => {
      results.push(node.val);
      if (node.left) recursive(node.left);
      if (node.right) recursive(node.right);
    };
    recursive(this.root);
    return results;
  }

  /**
   * @description Returns array of current nodes in tree in inOrder
   */
  inOrder() {
    let results = [];

    let recursive = node => {
      if (node.left) recursive(node.left);
      results.push(node.val);
      if (node.right) recursive(node.right);
    };
    recursive(this.root);
    return results;
  }

  /**
   * @description Returns array of current nodes in tree in postOrder
   */
  postOrder() {
    let results = [];

    let recursive = node => {
      if (node.left) recursive(node.left);
      if (node.right) recursive(node.right);
      results.push(node.val);
    };
    recursive(this.root);
    return results;
  }
}

/**
 * @class
 * @description Binary Search Tree Class
 */
class BinarySearchTree {
  constructor(value) {
    this.root = new BinaryTreeNode(value);
    this.count = 0;
  }

  /**
   * @description Inserts new node in tree based on value
   * @param {*} value
   */
  add(value) {
    this.count++;

    let newNode = new BinaryTreeNode(value);

    const searchTree = node => {
      if (value < node.val) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      } else if (value > node.val) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }

  /**
   * @description Returns boolean if tree contains node
   * @param {*} value
   */
  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.val) {
        return true;
      }
      if (value < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}

let tree1 = new BinarySearchTree(10);
let tree2 = new BinarySearchTree(5);

tree1.add(10);
tree1.add(20);
tree1.add(5);
tree1.add(11);

tree2.add(20);
tree2.add(10);
tree2.add(5);
tree2.add(1);


console.log(tree1);
console.log(tree2);

console.log(treeIntersect(tree1, tree2));

module.exports = {treeIntersect, BinarySearchTree };
