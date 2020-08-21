var merge = function(intervals) {

  if (intervals.length === 1) return intervals

  let overlaps = []
  for (let i of intervals) {
    for (let o of overlaps) {
      if (o[0] < i[0] <= o[1] ) {
        console.log(o,i, overlaps)
        o[1] = i[0]
        console.log(o,i, overlaps,'\n')
      } else {
        overlaps.push(i)
      }
    }
  }



  return overlaps
};



const interval = [[1,3],[2,6],[8,10],[15,18]]
const expected = [[1,6],[8,10],[15,18]]
console.log('\n', merge(interval))
