'use strict';

const BST = require('../tree');

// Can successfully instantiate an empty tree
// Can successfully instantiate a tree with a single root node
// Can successfully add a left child and right child to a single root node
// Can successfully return a collection from a preorder traversal
// Can successfully return a collection from an inorder traversal
// Can successfully return a collection from a postorder traversal


describe('Tests for the Binary Tree and Binary Search Tree classes', ()=> {
  it('can successfully instantiate an empty tree', ()=>{
    const searchTree = new BST();
    expect(searchTree).not.toBeNull();
  });

  it('can successfully instantiate a tree with a single root node', ()=>{
    const searchTree = new BST();
    searchTree.add(20);
    expect(searchTree.tree.root.val).toBe(20);
  });

  it('can successfully add a left child and right child to a single root node', ()=>{
    const searchTree = new BST();
    searchTree.add(2);
    searchTree.add(1);
    searchTree.add(3);
    expect(searchTree.tree.root.left.val).toBe(1);
    expect(searchTree.tree.root.right.val).toBe(3);
    
  });

  it('can successfully return a collection from a preorder traversal', ()=>{
    const searchTree = new BST();
    for(let i = 0; i < 11; i++) searchTree.add(i);
    const collection = new Array();
    searchTree.tree.root.preOrder(val => collection.push(val));
    expect(collection).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });

  it('can successfully return a collection from an inorder traversal', ()=>{
    const searchTree = new BST();
    for (let i = 0; i < 11; i++) searchTree.add(i);
    const collection = new Array();
    searchTree.tree.root.inOrder(val => collection.push(val));
    expect(collection).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('can successfully return a collection from a postorder traversal', ()=>{
    const searchTree = new BST();
    for (let i = 0; i < 11; i++) searchTree.add(i);
    const collection = new Array();
    searchTree.tree.root.postOrder(val => collection.push(val));
    expect(collection).toEqual([10,9,8,7,6,5,4,3,2,1]);
  });


  // Tests for BST.contains(val) were not included in the list of tests for some reason, but for the sake of being thorough

  it('can successfully return true when a given value is within the list', ()=>{
    const searchTree = new BST();
    for (let i = 0; i < 11; i++) searchTree.add(i);
    expect(searchTree.contains(5)).toBeTruthy();
  });

  it('can successfully return false when a given value is not within the list', () => {
    const searchTree = new BST();
    for (let i = 0; i < 11; i++) searchTree.add(i);
    expect(searchTree.contains(100)).toBeFalsy();
  });
});