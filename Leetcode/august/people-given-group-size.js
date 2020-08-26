var groupThePeople = function(groupSizes) {

  if (groupSizes === 1) return [groupSizes]


  let groups = {}

  for ( let i = 0; i < groupSizes.length; i++) {
    if (groupSizes[i] in groups) { groups[groupSizes[i]].push(i) }
    else { groups[groupSizes[i]] = [i] }
  }

  let output = []
  for (let o in groups) {
    console.log(o, groups[o])
    while (groups[o].length > 0) { output.push(groups[o].splice(0,o)) }
  }
  return output
}
let groupLists = [3,3,3,3,3,1,3]
console.log('\n', groupThePeople(groupLists))


/*
Runtime: 96 ms, faster than 91.53% of JavaScript online submissions for Group the People Given the Group Size They Belong To.
Memory Usage: 42.2 MB, less than 70.35% of JavaScript online submissions for Group the People Given the Group Size They Belong To.
*/
