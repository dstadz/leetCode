var processQueries = function(queries, m) {

  class ListNode {
    constructor(val) {
      this.val = val
      this.next = null
    }
  }

  class LinkedList {
    constructor() {
      this.head = new ListNode(1)
      this.cur = this.head
      let n = 1;
      while (this.cur.val < m) {
        n++
        this.cur.next = new ListNode(n)
        this.cur = this.cur.next
      }
    }

    findIthIndex(q) {
      if (q === this.head.val) return 0

      let i = 0;
      this.cur = this.head
// console.log(q, this.cur.next)
      while (this.cur.next.val !== q) {
        this.cur = this.cur.next
        i++
      }
      this.swap = this.cur.next
      this.cur.next = this.cur.next.next
      this.swap.next = this.head
      this.head = this.swap

      return i + 1
    }
  }

  let output = new Array(queries.length)
  const node = new LinkedList()

  for (let i in queries) { output[i] = node.findIthIndex(queries[i]) }

  return output
};

const [query, m] = [[7,5,5,8,3],8] // [2,1,2,1]
console.log(processQueries(query,m))
/*
Runtime: 120 ms, faster than 25.93% of JavaScript online submissions for Queries on a Permutation With Key.
Memory Usage: 38 MB, less than 50.26% of JavaScript online submissions for Queries on a Permutation With Key.
*/
