var numTimesAllBlue = function(light) {

  let switches = []

  for (let i in light) {
    switches[light[i]] = parseInt(i) + 1
  }
  switches.shift()
  console.log(switches)

}
const light = [2,1,3,5,4]
console.log(numTimesAllBlue(light))