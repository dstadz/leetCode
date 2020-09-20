var goodNodes = function(root) {
  let path = []
  let goods = 0

  if (root.left == null & root.right == null) return 1

  const traverse = node => {
    path.push(node.val)
    console.log(path,  Math.max(...path), node.val)

    if (node.val >= Math.max(...path)) goods++

    if (node.left){
      traverse(node.left)
      path.pop()
    }

    if (node.right) {
      traverse(node.right)
      path.pop()
    }
  }

  traverse(root)
  return goods
};
/*
Runtime: 160 ms, faster than 80.18% of JavaScript online submissions for Count Good Nodes in Binary Tree.
Memory Usage: 56.8 MB, less than 80.63% of JavaScript online submissions for Count Good Nodes in Binary Tree.
*/