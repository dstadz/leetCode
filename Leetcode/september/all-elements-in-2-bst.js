var getAllElements = function(root1, root2) {
  let ints = []

  const traverse = node => {
    ints.push(node.val)
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
  }

  if (root1) traverse(root1)
  if (root2) traverse(root2)

  return ints.sort((a,b) => a - b)
};

/*
Runtime: 200 ms, faster than 52.66% of JavaScript online submissions for All Elements in Two Binary Search Trees.
Memory Usage: 48.7 MB, less than 54.53% of JavaScript online submissions for All Elements in Two Binary Search Trees.
*/