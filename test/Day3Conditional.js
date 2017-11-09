function day3 (n) {
  const N = parseInt(n)
  if (N % 2 == 1 || N >= 6 && N <= 20) {
    return `Weird`
  }
  return `Not Weird`
}

export default day3
