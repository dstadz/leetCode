
var deepestLeavesSum = function(root) {
  let tot = 0
  let depth = 0
  let deepest = 0

  const traverse = node => {
    depth++
    if (deepest < depth) [deepest, tot] = [depth, 0]
    if (deepest === depth) tot += node.val
    if (node.left) {
      traverse(node.left)
      depth--
    }

    if (node.right) {
      traverse(node.right)
      depth--
    }
  }

  traverse(root)
  return tot
};
/*
Runtime: 100 ms, faster than 89.98% of JavaScript online submissions for Deepest Leaves Sum.
Memory Usage: 47.1 MB, less than 52.67% of JavaScript online submissions for Deepest Leaves Sum.
*/
