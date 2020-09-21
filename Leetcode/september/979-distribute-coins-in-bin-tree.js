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
 * @return {number}
 */
var distributeCoins = function(root) {

  const traverse = node => {
    if (node.val > 1) {
      
    }


    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
  }
};