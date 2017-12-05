const getOutput = base2 => {
  let maxTemp = 0
  let max = 1
  for (let i = 0; i < base2.length; i++) {
    if (
      (base2[i] === 1 && base2[i + 1] === 1) ||
      (base2[i] === 1 && base2[i - 1] === 1)
    ) {
      maxTemp += 1
    } else if (maxTemp > max) {
      max = maxTemp
      maxTemp = 0
    } else {
      maxTemp = 0
    }
  }
  return maxTemp > max ? maxTemp : max
}

const day10 = n => {
  const base2 = n
    .toString(2)
    .split('')
    .map(n => parseInt(n))
  const output = getOutput(base2)
  return output
}

export default day10
