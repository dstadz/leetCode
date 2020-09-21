var numTilePossibilities = function(tiles) {
  let letterCount = {}
  let total = 0

  for (let i of tiles) {
    if (i in letterCount) letterCount[i] += 1
    else letterCount[i] = 1
  }
  console.log(letterCount)

  return total
};

const tiles = 'AAABBC'
console.log(numTilePossibilities(tiles))