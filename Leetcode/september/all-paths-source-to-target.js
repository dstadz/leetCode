
var allPathsSourceTarget = function(graph) {
  if (graph[0].length === 0) return [[]]

  let paths = []
  let stack = [0]

  const cycle = idx => {

    if (idx === graph.length - 1) {
      paths.push([...stack])
      stack.pop()
      return
    }

    for (let i of graph[idx]) {
      stack.push(i)
      console.log('push',stack)
      cycle(i)
      stack.pop()
      console.log('pop',stack)

    }
  }

  while (stack.length > 0) {
    cycle(stack[stack.length-1])
  }

  return paths
};

const graph = [[1,2],[3],[3],[]] //[[0,1,3],[0,2,3]]
console.log(allPathsSourceTarget(graph))
/*

*/
