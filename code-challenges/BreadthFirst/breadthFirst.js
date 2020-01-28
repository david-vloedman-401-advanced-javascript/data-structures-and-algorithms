'use strict';

const Tree = require('../../data-structures/tree/tree');
const Queue = require('../../data-structures/queue/queue');

/**
 * 
 * @param {*} tree 
 */
function breadthFirstList(tree){
  breadthFirst(tree.tree.root);
}
/**
 * 
 * @param {*} root 
 */
function breadthFirst(root){
  const queue = new Queue();
  if(!root) return;
  queue.enqueue(root);
  while(!queue.isEmpty()){
    let node = queue.dequeue();
    console.log(node.val);
    if(node.left) queue.enqueue(node.left);
    if(node.right) queue.enqueue(node.right);
  }
}



