var queensAttacktheKing = function(queens, king) {
  let lethals = []
  const board = 8
  let [r,c] = king

  const searchForArray = (outer, inner) => {
    for (let i of outer) {
      if (i[0] == inner[0] & i[1] == inner[1]) return true
    }
    return false
  }


  while (r >= 0) { //check up
    if (searchForArray(queens, [r,c])) {
      lethals.push([r,c])
      break
    }
    r--;
  } [r,c] = king

  while (r < board) { //check down
    if (searchForArray(queens, [r,c])) {
      lethals.push([r,c])
      break
    }
    r++;
  } [r,c] = king

  while (c >= 0) { //check left
    if (searchForArray(queens, [r,c])) {
      lethals.push([r,c])
      break
    }
    c--;
  } [r,c] = king

  while (c < board) { //check right
    if (searchForArray(queens, [r,c])) {
      lethals.push([r,c])
      break
    }
    c++;
  } [r,c] = king

  while (r >= 0 & c >= 0) { //check top-left
    if (searchForArray(queens, [r,c])) {
      lethals.push([r,c])
      break
    }
    r--; c--;
  } [r,c] = king

  while (r >= 0 & c < board) { //check top-right
    if (searchForArray(queens, [r,c])) {
      lethals.push([r,c])
      break
    }
    r--; c++;
  } [r,c] = king

  while (r < board & c >= 0) { //check bottom-left
    if (searchForArray(queens, [r,c])) {
      lethals.push([r,c])
      break
    }
    r++; c--;
  } [r,c] = king

  while (r < board & c < board) { //check bottom-right
    if (searchForArray(queens, [r,c])) {
      lethals.push([r,c])
      break
    }
    r++; c++;
  }

  return lethals
};

const queens = [[2,0],[1,6],[3,4],[4,1]]
const king = [3,5]
console.log(queensAttacktheKing(queens,king))
/*
Runtime: 80 ms, faster than 76.47% of JavaScript online submissions for Queens That Can Attack the King.
Memory Usage: 38.3 MB, less than 52.94% of JavaScript online submissions for Queens That Can Attack the King.
*/