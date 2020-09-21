var pancakeSort = function(arr) {
  let stack = []
  const flip = k => {
    let kcab = arr.slice(0,k).reverse()
    let back = arr.slice(k)
    arr = [...kcab, ...back]
  }
  let end = arr.length
  while(end > 0) {
    let pivot = arr.indexOf(end) + 1
    flip(pivot)
    flip(end)
    stack.push(...[pivot,end])
    end--
  }
  return stack
};
const arr = [3,2,4,1]
console.log(pancakeSort(arr))
/*
Runtime: 92 ms, faster than 49.49% of JavaScript online submissions for Pancake Sorting.
Memory Usage: 42.2 MB, less than 13.96% of JavaScript online submissions for Pancake Sorting.
*/
