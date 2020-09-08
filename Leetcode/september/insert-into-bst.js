
var insertIntoBST = function(root, val) {
  if (root == undefined) return new TreeNode(val)

  const traverse = node => {
    if (val < node.val) {
      if (node.left) traverse(node.left)
      else node.left = new TreeNode(val)
    }
    if (node.val < val) {
      if (node.right) traverse(node.right)
      else node.right = new TreeNode(val)
    }
  }
  traverse(root)
  return root
};

/*
Runtime: 132 ms, faster than 54.66% of JavaScript online submissions for Insert into a Binary Search Tree.
Memory Usage: 44.5 MB, less than 65.08% of JavaScript online submissions for Insert into a Binary Search Tree.
*/
