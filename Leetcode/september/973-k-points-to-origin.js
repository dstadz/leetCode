var kClosest = function(points, K) {
  for (let i of points) {
    i[2] = (i[0]**2 + i[1]**2)**.5
  }
  points.sort((a,b) => a[2] - b[2])
  points.map(p =>(p.pop()))
  return points.slice(0,k)
}
const [points,k] = [[[1,3],[-2,2]],1]
console.log(kClosest(points,k))
/*
Runtime: 216 ms, faster than 52.49% of JavaScript online submissions for K Closest Points to Origin.
Memory Usage: 55.7 MB, less than 18.43% of JavaScript online submissions for K Closest Points to Origin.
*/