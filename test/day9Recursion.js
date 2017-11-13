function factorial (n) {
  return n === 0 ? 1 : (n * (factorial(n - 1)))
}

function day9 (n) {
  return factorial(n)
}

export default day9
