const isPrime = n => {
  if (n < 2) {
    return false
  }
  const raiz = Math.sqrt(n)
  for (let i = 2; i <= raiz; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

const main = input => {
  const array = input.split(' ')
  const length = input.length
  if (length === 0) {
    return
  }
  const output = []
  array.map(n => {
    isPrime(n) === true ? output.push('Prime') : output.push('Not prime')
  })
  return output
}

export default main
