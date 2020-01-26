'use strict';

/**
 * TreeNode
 * @class
 */
class TreeNode {
  constructor(val = null) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  /**
   *
   * @param cb
   */
  preOrder(cb) {   
    cb(this.val);
    if (this.left) this.left.preOrder(cb);
    if (this.right) this.right.preOrder(cb);
  }

  /**
   *
   * @param cb
   */
  postOrder(cb) {
    if (this.left) this.left.postOrder(cb);
    if (this.right) this.right.postOrder(cb);
    cb(this.val);
  }

  /**
   *
   * @param cb
   */
  inOrder(cb) {
    if (this.left) this.left.inOrder(cb);
    cb(this.val);
    if (this.right) this.right.inOrder(cb);
  }
}


/**
 * Binary Tree
 * @class
 */
class BinaryTree {
  constructor() {
    this.root = new TreeNode();
  }
}

class BinarySearchTree {
  constructor(tree = new BinaryTree()) {
    this.tree = tree;
  }

  /**
   * 
   * @param val 
   */
  add(val){    
    this.getPosition(this.tree.root, val);
  }

  /**
   * 
   * @param  root 
   * @param  val 
   */
  getPosition(root, val){
    
    if(!root.val) {      
      root.val = val;      
    } else {
      
      if(root.val < val){
        if(!root.right) root.right = new TreeNode(val);
        else{ 
          this.getPosition(root.right, val);
        }
      } else {
        if(!root.left) root.left = new TreeNode(val);
        else{
          this.getPosition(root.left, val);
        }         
      }
    }
  }

  /**
   * 
   * @param val 
   * @returns bool
   */
  contains(val){
    
    return this.search(this.tree.root, val);
  }
  /**
   * 
   * @param  root 
   * @param  val 
   * @returns func
   */
  search(root, val){  
    if(root.val === val) return true;  
    if(root.val < val){
      if(!root.right) return false;
      return this.search(root.right, val);
    } 
    if(!root.left) return false;
    return this.search(root.left, val);
  }
}


module.exports = BinarySearchTree;





