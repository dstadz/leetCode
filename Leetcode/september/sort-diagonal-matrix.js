var diagonalSort = function(mat) {
  if (mat.length === 1 |  mat[0].length === 1) return mat

  const getStart = first => {
    if (first > 0) return [first,0]
    if (first == 0) return [0,0]
    if (first < 0) return [0,-first]
  }

  const getDiag = (y,x) => {
    let diag = []
    //retrieve diag
    while (y < mat[0].length & x < mat.length) {
      diag.push(mat[x][y])
      x++; y++
    }
    return diag.sort((a,b)=> a - b)
  }

  //start at TL corner, move right, then down
  let edge = mat[0].length-1
  while (edge > -mat.length) {
    //establish where to start diagonal
    let [y,x] = getStart(edge)
    const diag = getDiag(y,x)
    let z = 0
    while (y < mat[0].length & x < mat.length) {
      mat[x][y] = diag[z]
      x++; y++; z++
    }
    edge--
  }
  return mat
};

let mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
console.log(mat)
console.log(diagonalSort(mat))

/*
Runtime: 92 ms, faster than 83.33% of JavaScript online submissions for Sort the Matrix Diagonally.
Memory Usage: 40.4 MB, less than 20.66% of JavaScript online submissions for Sort the Matrix Diagonally.
*/
