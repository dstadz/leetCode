var reconstructQueue = function(people) {

  let output = [[0,0]]
  let higher



  let orders = {}
  for (let i of people) {
    if (i[1] in orders) {
      orders[i[1]].push(i[0])
      orders[i[1]].sort((a,b) => a - b)
    } else {
      orders[i[1]] = [i[0]]
    }
  } console.log(orders)

  const insert = (i,k) => {
    console.log(i,k, '=>', output)
    let higher = 0
    //[i,k] => [j[0], j[1]]
    for (let j of output) {
      if ( i >= j[0] & higher > j[1]) {
        higher++
        continue
      }
      else {
        output.push([i,k])
        break
      }
    }
  }


  for (let k in orders) {
    for (let i of orders[k]) {
      insert(i,k)
    }

  }
  return output.slice(1)
};
const people = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
//             [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

console.log(reconstructQueue(people))