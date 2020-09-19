/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {

  const traverse = node => {
    if (node.left) {
      if (traverse(node.left)) node.left = null
    }
    if (node.right) {
      if (traverse(node.right)) node.right = null
    }
    else if (!node.left & !node.right) return node.val == 0
  }

  traverse(root)
  return root
};