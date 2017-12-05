const factorial = n => (n === 0 ? 1 : n * factorial(n - 1))

const day9 = n => factorial(n)

export default day9
