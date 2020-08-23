var maxIncreaseKeepingSkyline = function(grid) {

  if (grid.length < 2) return 0
  if (grid[0].length < 2) return 0

  let floors = 0
  let highRow = []
  let highCol = []

  for (let y = 0; y < grid.length; y++){
    let col = []
    for (let x = 0; x < grid[y].length; x++){
      col.push(grid[x][y])
    }

    highCol.push(Math.max(...col))
    highRow.push(Math.max(...grid[y]))
  }

  for (let y = 0; y < grid.length; y++){
    for (let x = 0; x < grid[y].length; x++){
      floors += Math.min(highCol[y],highRow[x]) - grid[x][y]
    }
  }

  return floors
};



const skyline =  [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
console.log(maxIncreaseKeepingSkyline(skyline))
// Runtime: 116 ms, faster than 19.93% of JavaScript online submissions for Max Increase to Keep City Skyline.
// Memory Usage: 38.4 MB, less than 31.56% of JavaScript online submissions for Max Increase to Keep City Skyline.