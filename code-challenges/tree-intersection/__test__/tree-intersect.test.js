'use strict';

let treeIntersect = require('../treeIntersection');
let { BinarySearchTree } = require('../../../data-structures/tree/tree');

describe('treeIntersection(tree1, tree2)', () => {
  let tree1;
  let tree2;
  beforeEach(() => {
    tree1 = new BinarySearchTree(10);
    tree2 = new BinarySearchTree(5);

    tree1.add(10);
    tree1.add(20);
    tree1.add(5);
    tree1.add(11);

    tree2.add(20);
    tree2.add(10);
    tree2.add(5);
    tree2.add(1);
  });

  test('Should return matching node values from each tree in an array', () => {
    let result = treeIntersect(tree1, tree2);

    expect(result.length).toEqual(3);
    expect(result).toEqual([5, 10, 20]);
  });

  test('Return error if no tree', () => {
    let tree3 = 'tree';
    let tree4 = 'tree';

    expect(treeIntersect(tree3, tree4)).toBe('Not a valid tree');
  });

  test('Should not modify the trees', () => {
    let result = treeIntersect(tree1, tree2);

    expect(tree1.root.val).toBe(10);
    expect(tree2.root.val).toBe(5);
    expect(result).toEqual([5, 10, 20]);
  });
});
