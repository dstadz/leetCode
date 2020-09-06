var bstToGst = function(root) {
  let rightSum = 0

  const traverse = node => {
    if (node.right) traverse(node.right)

    rightSum += node.val
    node.val = rightSum

    if (node.left) traverse(node.left)
  }

  traverse(root)
  return root
};

/*
Runtime: 76 ms, faster than 60.99% of JavaScript online submissions for Binary Search Tree to Greater Sum Tree.
Memory Usage: 36.9 MB, less than 50.71% of JavaScript online submissions for Binary Search Tree to Greater Sum Tree.
*/
