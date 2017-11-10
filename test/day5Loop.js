function day5 (n) {
  const output = []
  for (let i = 1; i <= 10; i++) {
    output.push(`${n} x ${i} = ${n * i}`)
  }
  return output
}

export default day5
