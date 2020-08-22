var merge = function(intervals) {

  if (intervals.length === 0) return []
  if (intervals.length === 1) return intervals

  let overlaps = [intervals[0]]

  for (let i of intervals) {
    let merged = false
    console.log('\n\n', i)
    for (let o of overlaps) {
      console.log(o)

      //[] {}
      if (i[1] <= o[0]) continue
      //{} []
      if (o[1] <= i[0]) continue
      // { [] }
      if (o[0] <= i[0] & i[1] <= o[1] ) merge = true


      // [ {} ]
      else if (i[0] <= o[0] & o[1] <= i[1] ) {
        merge = true
        o = i
        // console.log(overlaps)
        console.log(o,i, 'swap')
        // console.log(overlaps)
        continue
      }

      // [ {] }
      else if (i[0] <= o[0] & o[0] <= i[1]) {
        o[0] = i[0]
        merged = true
      }

      // { [} ]
      else if (o[0] <= i[0] & i[0] <= o[1]) {
        console.log(o[0],i[0],o[1])
        o[1] = i[1]
        merged = true
      }
    }

    if (!merged) overlaps.push(i)
    console.log(overlaps)
  }
  return overlaps
};



const interval = [[1,3],[2,6],[8,9],[10,11],[15,18],[16,20],[7,12]]
const expected = [[1,6],[7,12],[15,20]]
const interval2 = [[1,4],[2,3]]
const expected2 = [[0,4]]
// const interval3 = [[1,4],[0,5]]
// const exp3 = [[0,5]]
console.log('\n', merge(interval))
