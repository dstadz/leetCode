var countTriplets = function(arr) {

  let triplets = 0;

  const getListXor = (l,r) => {
    let x = l
    let i = l
    while (i <= r) {
      x = x ^ i
      console.log(x)
      i++
    }

  }

  return triplets
}