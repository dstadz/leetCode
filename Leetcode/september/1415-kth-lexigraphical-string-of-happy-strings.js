var getHappyString = function(n, k) {

  let third = (2 ** (n - 1))
  if (3 * third < k) return ''

  let str, left, mid, right;
  //find first char
  if (k <= third) [str, left, right] = ['a', 0, third]
  else if (third < k & k <= third * 2) [str, left, right] = ['b', third, third * 2]
  else if (third * 2 <= k) [str, left, right] = ['c', third * 2, third * 3]

  const happies = { a:['b','c'], b:['a','c'], c:['a','b'] }

  while (n > 1) {
    mid = (left + right) / 2
    if (k <= mid) {
      right = mid
      str += happies[str[str.length-1]][0]
    } else {
      left = mid
      str += happies[str[str.length-1]][1]
    }
    n--;
  }

  return str
};

const [n,k] = [15, 450]
console.log(getHappyString(n,k))
/*
Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for The k-th Lexicographical String of All Happy Strings of Length n.
Memory Usage: 37.2 MB, less than 97.40% of JavaScript online submissions for The k-th Lexicographical String of All Happy Strings of Length n.
*/
