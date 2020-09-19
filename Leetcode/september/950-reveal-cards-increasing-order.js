var deckRevealedIncreasing = function(deck) {
  deck.sort((a,b) => a - b)

  let output = new Array(deck.length)
  // const rounds = Math.round(Math.log2(deck.length) + .5)
  // console.log(rounds)

  let r = 2
  output[0] = deck[0]
  while (r <= output.length) {
    for (let i = r - 1; i < deck.length; i++) {
      console.log(i,r)
      output[i * 2] = deck[i]
    }
    r *= 2
  }



  return output
};
const deck = [0,1,2,3,4,5,6,7,8,9] // =>  [0,5,1,9,2,6,3,8,4,7]
const bigDeck = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19] // => [0,10,1,15,2,11,3,19,4,12,5,16,6,13,7,18,8,14,9,17]
const biggerDk =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] // [0,18,1,11,2,16,3,12,4,20,5,13,6,17,7,14,8,19,9,15,10]
console.log(deckRevealedIncreasing(biggerDk))