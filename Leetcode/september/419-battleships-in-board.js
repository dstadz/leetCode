
var countBattleships = function(board) {
  let ships = 0;

  if (board[0][0] == 'X' ) ships++

  for (let r = 1; r < board.length; r++) {
    if(board[r][0] == 'X' & board[r-1][0] != 'X') ships++
  }
  for (let c = 1; c < board[0].length; c++) {
    if(board[0][c] == 'X' & board[0][c-1] != 'X') ships++
  }

  for (let r = 1; r < board.length; r++) {
    for (let c = 1; c < board[0].length; c++) {
      if(board[r][c] == 'X' & board[r-1][c] != 'X' & board[r][c-1] !='X') ships++
      }
    }

  return ships
};
const board = [["X",".",".","X"],[".",".",".","X"],["X",".",".","X"]]
console.log(countBattleships(board))

/*
Runtime: 84 ms, faster than 46.27% of JavaScript online submissions for Battleships in a Board.
Memory Usage: 37.6 MB, less than 26.87% of JavaScript online submissions for Battleships in a Board.
*/