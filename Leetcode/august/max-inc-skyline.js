var maxIncreaseKeepingSkyline = function(grid) {
  console.log(grid)

  if (grid.length < 2) return 0
  if (grid[0].length < 2) return 0

  let floors = 0
  const shortestShadow = (y,x) => {
  
    let vert = min(grid[x])

    let horzCol = []
    for (let i = 0; i < grid[y].length; i++) {
      hortzcol.append(grid[y][i])
    }
    let horz = min(horzCol)
    return min(vert,horz) //shortest shadow
  }



  return floors
};



const skyline =  [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
console.log(maxIncreaseKeepingSkyline(skyline))