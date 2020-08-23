/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function(rectangle) {
  this.rectangle = rectangle
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2 
* @param {number} newValue
* @return {void}
*/
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
  console.log((row1, col1, row2, col2, newValue))
  let left = Math.min(col1,col2)
  let right = Math.max(col1,col2)
  let top = Math.min(row1,row2)
  let bottom = Math.max(row1,row2)
  
  for (let r = top; r <= bottom; r++) {
      for (let c = left; c <= right; c++) {
          this.rectangle[r][c] = newValue
      }
  }
};

/** 
* @param {number} row 
* @param {number} col
* @return {number}
*/
SubrectangleQueries.prototype.getValue = function(row, col) {
  return this.rectangle[row][col]
};

/*
Runtime: 136 ms, faster than 25.99% of JavaScript online submissions for Subrectangle Queries.
Memory Usage: 44.4 MB, less than 6.21% of JavaScript online submissions for Subrectangle Querie
*/