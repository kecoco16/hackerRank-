function Solution () {
  this.stack = []
  this.queue = []

  Solution.prototype.pushCharacter = this.stack.push
  Solution.prototype.popCharacter = this.stack.pop
  Solution.prototype.enqueueCharacter = this.queue.push
  Solution.prototype.dequeueCharacter = this.queue.shift
}

const getSolution = (s) => {
  const obj = new Solution()
  for (let i = 0; i < s.length; i++) {
    obj.pushCharacter(s.charAt(i))
    obj.enqueueCharacter(s.charAt(i))
  }
  return obj
}

const result = (s, obj) => {
  let isPalindrome = true
  for (let i = 0; i < s.length / 2; i++) {
    if (obj.popCharacter() !== obj.dequeueCharacter()) {
      isPalindrome = false
      break
    }
  }
  return isPalindrome ? `The word, ${s}, is a palindrome.` : `The word, ${s}, is not a palindrome.`
}

const main = str => {
  const s = str
  const obj = getSolution(s)
  return result(s, obj)
}

export default main
