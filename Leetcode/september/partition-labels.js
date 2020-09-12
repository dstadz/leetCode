var partitionLabels = function(S) {
  let arr = S.split('')
  let rev = [...arr].reverse()

  let firstLast = {}
  for (let i of arr){
    if (!(i in firstLast)){
      firstLast[i] = [arr.indexOf(i), rev.length - rev.indexOf(i) - 1]
    }
  }

  let begEnd = []
  for (let i in firstLast) begEnd.push(firstLast[i])

  //taken from answer to merge
  let overlaps = [begEnd[0]]
  for (let i of begEnd) {
    let merged = false
    for (let o of overlaps) {
      if (i[1] <= o[0]) continue
      if (o[1] <= i[0]) continue
      if (o[0] <= i[0] & i[1] <= o[1] ) merged = true
      else if (i[0] <= o[0] & o[0] <= i[1]) [o[0], merged] = [i[0], true]
      else if (o[0] <= i[0] & i[0] <= o[1]) [o[1], merged] = [i[1], true]
      else if (i[0] <= o[0] & o[1] <= i[1] ) {
        [merged, o] = [true, i]
        continue
      }
    }
    if (!merged) overlaps.push(i)
  }
  if (overlaps.length >= 2){
    if(overlaps[0][0] == overlaps[1][0] & overlaps[0][1] == overlaps[1][1]) overlaps.shift()
}
  return overlaps.map(x => x[1] - x[0] + 1)
};


const S = "ababcbacadefegdehijhklij" //[9,7,8] => 'ababcbaca', 'defegde', hijhklij'
const C = "caedbdedda"
const E = "eccbbbbdec"
console.log(partitionLabels(E))
/*
Runtime: 144 ms, faster than 5.09% of JavaScript online submissions for Partition Labels.
Memory Usage: 39.9 MB, less than 9.96% of JavaScript online submissions for Partition Labels.
*/
