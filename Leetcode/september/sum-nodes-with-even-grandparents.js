// Runtime: 140 ms, faster than 21.05% of JavaScript online submissions for Sum of Nodes with Even-Valued Grandparent.
// Memory Usage: 47.7 MB, less than 14.47% of JavaScript online submissions for Sum of Nodes with Even-Valued Grandparent.


var sumEvenGrandparent = function(root) {
  let sum  = 0

  const grandkids = node => {
    let gsum = 0
    if (node.left){
      if (node.left.left) gsum += node.left.left.val
      if (node.left.right) gsum += node.left.right.val
    }
    if (node.right){
      if (node.right.left) gsum += node.right.left.val
      if (node.right.right) gsum += node.right.right.val
    }
    return gsum
  }

  const traverse = (node) => {
    // console.log(node.val)
    if (node.val % 2 ===0 ) sum += grandkids(node)
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)

  }
  traverse(root)
  return sum
};