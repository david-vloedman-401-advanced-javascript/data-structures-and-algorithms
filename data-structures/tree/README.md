# Code Challege Binary Tree

## Queue

### Create binary tree classes and functionality 
- Tree Node : TreeNode()
- Binary Tree: BinaryTree()
  - preOrder(cb) : Treverse the tree using the callback before going to the next node
  - postOrder(cb) : Treverse the tree using the callback after treversing the tree
  - inOrder(cb) : Treverse the tree using the callback between left and right child treversal
- Binary Search Tree : BinarySearchTree() 
  - add(val) : adds a value to the correct position in the tree
  - contains(val) : returns whether or not the tree contains value

## Approach & Efficiency

I believe I took what would be considered a pretty traditional approach to this problem.

I believe the effieciency of this will scale 1:1 with the amount of elements in the array passed. 

Each function scales at O(n) for both time and space.

## Solution

[Code](./tree.js)




