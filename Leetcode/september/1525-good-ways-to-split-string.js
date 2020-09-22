var numSplits = function(s) {
  let goods = 0
  let arr = s.split('')

  const totLetters = new Set(s)
  let mid = arr.length/2
  let left = new Set(arr.slice(0,mid));
  let right = new Set(arr.slice(mid));

  while (left.size > right.size) {
    mid--;
    left = new Set(arr.slice(0,mid));
    right = new Set(arr.slice(mid));
  } while (left.size == right.size) {
    mid--;
    goods++
    left = new Set(arr.slice(0,mid));
    right = new Set(arr.slice(mid));
  }

  mid = arr.length/2
  while (left.size < right.size) {
    mid++;
    left = new Set(arr.slice(0,mid));
    right = new Set(arr.slice(mid));
  } while (left.size == right.size) {
    mid++;
    goods++
    left = new Set(arr.slice(0,mid));
    right = new Set(arr.slice(mid));
  }

  return goods
}
const s = 'aacaba';
console.log(numSplits(s))
/*

*/