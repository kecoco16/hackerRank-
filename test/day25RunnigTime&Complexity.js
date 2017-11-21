const prime = n => {
  if (n < 2) {
    return 'Not prime'
  }
  const raiz = Math.sqrt(n)
  for (let i = 2; i <= raiz; i++) {
    if (n % i === 0) {
      return 'Not prime'
    }
  }
  return 'Prime'
}

const main = input => {
  const array = input.split(' ')
  const length = input.length
  if (length === 0) {
    return
  }
  const output = []
  array.map(n => output.push(prime(n)))
  return output
}

export default main
