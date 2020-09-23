var dailyTemperatures = function(T) {
  let forecast = []
  let days
  let today
  const findNext = t => {
    days = 0
    today = T[t]
    while (today >= T[t + days]) days++

    return days + t < T.length ? days : 0
  }

  for (let i in T) forecast.push(findNext(parseInt(i)))
  return forecast
}
const t = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(t))
/*
Runtime: 3000 ms, faster than 5.12% of JavaScript online submissions for Daily Temperatures.
Memory Usage: 52 MB, less than 5.11% of JavaScript online submissions for Daily Temperatures.
*/