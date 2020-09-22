var maxAncestorDiff = function(root) {
  let maxdif = 0
  let ancestry = []
  const traverse = node => {
    console.log(ancestry,node.val)
    for (let i of ancestry) {
      if (Math.abs(node.val - i) > maxdif) maxdif = abs(node.val - i)
    }
    ancestry.push(node.val)


    if (node.left) {
      traverse(node.left)
      ancestry.pop()
    }
    if (node.right) {
      traverse(node.right)
      ancestry.pop()
    }
  }

  traverse(root)
  return maxdif
}
/*
Runtime: 144 ms, faster than 10.85% of JavaScript online submissions for Maximum Difference Between Node and Ancestor.
Memory Usage: 41.3 MB, less than 11.24% of JavaScript online submissions for Maximum Difference Between Node and Ancestor.
*/
