var levelOrder = function(root) {
  if (root == null ) return []
  let orders = []
  let depth = 0
  const traverse = node => {
    if (orders[depth]) orders[depth].push(node.val)
    else orders[depth] = [node.val]
    depth++

    for (let i of node.children){
      traverse(i)
      depth--
    }
  }


  traverse(root)
  return orders
}
/*
Runtime: 96 ms, faster than 81.89% of JavaScript online submissions for N-ary Tree Level Order Traversal.
Memory Usage: 39.7 MB, less than 66.67% of JavaScript online submissions for N-ary Tree Level Order Traversal.
*/
