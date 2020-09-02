var numTeams = function(rating) {

  if (rating.length < 3) return 0
  let teams = 0

  for (let i = 0; i < rating.length - 2; i++) {
    for (let j = i + 1; j < rating.length - 1; j++) {
      for (let k = j + 1; k< rating.length; k++) {
        if (rating[i] < rating[j] & rating[j] < rating[k]) teams += 1
        if (rating[i] > rating[j] & rating[j] > rating[k]) teams += 1
      }
    }
  }
  return teams
};

const rating = [1,2,3,4]
console.log(numTeams(rating))


/*
Runtime: 100 ms, faster than 53.65% of JavaScript online submissions for Count Number of Teams.
Memory Usage: 36.7 MB, less than 61.46% of JavaScript online submissions for Count Number of Teams.
*/