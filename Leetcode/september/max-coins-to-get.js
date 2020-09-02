var maxCoins = function(piles) {

  let coins = 0
  let n = (piles.length / 3)
  piles.sort((a, b) => a - b)
  console.log(piles)
  while (n < piles.length - 1) {
    coins += piles[n]
    n += 2
  }
  return coins
};

const pile = [9,5,6,8,10,1,4,10,7]
console.log(maxCoins(pile))
/*
Runtime: 196 ms, faster than 98.17% of JavaScript online submissions for Maximum Number of Coins You Can Get.
Memory Usage: 47.7 MB, less than 27.53% of JavaScript online submissions for Maximum Number of Coins You Can Get.
*/