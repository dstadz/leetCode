var matrixBlockSum = function(mat, K) {
  let added = []
  for (let a in mat) added.push([])

  const getNearVal = (r,c) => {
    for (let a = Math.max(r-K,0); a < Math.min(mat.length,r+K+1); a++) {
      for (let b = Math.max(c-K,0); b< Math.min(mat[0].length,c+K+1); b++) {
        if (added[a][b] == undefined) added[a][b] = 0
        added[a][b] += mat[r][c]
      }
    }
  }

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      getNearVal(i,j)
    }
  }
  return added
};
const [mat,k] = [[[1,2,3],[4,5,6],[7,8,9]],1]
console.log(matrixBlockSum(mat,k))
/*
Runtime: 892 ms, faster than 9.43% of JavaScript online submissions for Matrix Block Sum.
Memory Usage: 39.6 MB, less than 34.91% of JavaScript online submissions for Matrix Block Sum.
*/