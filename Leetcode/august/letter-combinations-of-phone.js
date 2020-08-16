/**
 * @param {string} digits
 * @return {string[]}
 */

const print = x => console.log(x)

var letterCombinations = function(digits) {
  const phone = {
    2:'abc',
    3:'def',
    4:'ghi',
    5:'jkl',
    6:'mno',
    7:'pqrs',
    8:'tuv',
    9:'wxyz'
  }

  let combos = ['']
  for (let i of digits) {
    let prev = [...combos]
    for (let n of phone[i]) {
      for (let p in prev) {
        p += n
      }
      print(prev)
      // let store = [...prev]
    }
    // combos = [...store]
  }

  return combos

/*
  take prev list, make copy, append letter from digit, store new arr in temp arr
  make another copy of prev, append next letter until out, continue to temp arr
  go through temp arr, concat all , set prev to returned val
*/
};


let number = '23'
console.log(letterCombinations(number))
