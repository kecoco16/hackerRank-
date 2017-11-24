const Solution = () => {
  const stack = []
  const queue = []

  Solution.prototype.pushCharacter = stack.push
  Solution.prototype.popCharacter = stack.pop
  Solution.prototype.enqueueCharacter = queue.push
  Solution.prototype.dequeueCharacter = queue.shift
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
