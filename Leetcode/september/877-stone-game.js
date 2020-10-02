var stoneGame = function(piles) {
  const win = (piles.reduce((tot, n) => tot + n) + 1) / 2
  let scores = [0,0]
  let [a,b] = [0,1]
  // basic get most
  const getbiggest = x => {
    const p = piles.length
    // console.log(piles, scores)
    if (1 < p & p <= 3 ) {
      if (piles[0] > piles[p - 1]) scores[x] += piles.shift()
      else scores[x] += piles.pop()
    } 
    else {
      let [lo, li, ri, ro] = [piles[0], piles[1], piles[p - 2], piles[p - 1]]
      console.log(lo,li,ri,ro)
      if (ri + Math.min(li,ro)> lo + Math.max(li,ro)) scores[x] += piles.shift()
      else if (li + Math.max(ri,lo) > ro + Math.max(ri,lo)) scores[x] += piles.pop()
      else {
        let depth = 0
        while (depth < p / 2 && piles[depth] == piles[p - (depth + 1)]) depth++

        if (depth % 2 == 0 && piles[depth] > piles[p - (depth + 1)]) scores[x] += piles.shift()
        else scores[x] += piles.pop()
      }
    }

  }


  while (scores[a] < win && scores[b] < win) {
    if (piles.length == 0) break
    getbiggest(a)
    getbiggest(b)
    console.log(piles, scores)
  }

  return scores[a] > scores[b]
}
const piles =[6,9,4,3,9,8]
console.log(stoneGame(piles))
/*

*/
