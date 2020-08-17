var makeGood = function(s) {

  if (s=='') return ''

  let arr = s.split('')
  const isGood = i => {
    let a = arr[i]
    let b = arr[i+1]
    // console.log(i,a,b,arr)
    if (i == arr.length - 1) return true
    if (a.toLowerCase() == b.toLowerCase()) return a === b
    return true
  }

  let i = arr.length - 2
  while ( i >= 0) {
    console.log(i, arr, arr[i], arr[i+1])
    // if ( i < arr.length-2)
    if (!isGood(i)) arr.splice(i, 2)

    i--
  }

  return (arr.join(''))
};
const word = "abBAcC"
console.log('\n',makeGood(word))