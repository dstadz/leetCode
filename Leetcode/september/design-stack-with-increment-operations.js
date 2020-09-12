var CustomStack = function(maxSize) {
  this.stack = []
    this.maxSize = maxSize
};


CustomStack.prototype.push = function(x) {
  if (this.stack.length < this.maxSize) this.stack.push(x)
};

CustomStack.prototype.pop = function() {
  if (this.stack.length >= 1) return this.stack.pop()
  return -1
};

CustomStack.prototype.increment = function(k, val) {
  for (let i = 0; i < Math.min(this.stack.length, k); i++) {
    this.stack[i] += val
  }
};

/*
Runtime: 128 ms, faster than 85.96% of JavaScript online submissions for Design a Stack With Increment Operation.
Memory Usage: 42.8 MB, less than 90.06% of JavaScript online submissions for Design a Stack With Increment Operation.
*/