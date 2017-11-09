function day0 (inputString) {
  return `Hello, World.${inputString}`
}

function day1 () {
  const i = 4
  const d = 4.0
  const s = 'HackerRank'
  let integer
  let double
  let string
  integer = parseInt(12)
  double = parseFloat(4.0)
  string = 'is the best place to learn and practice coding!'
  return `${i + integer} ${(d + double).toFixed(1)} ${s} ${string}`
}

export {
  day0,
  day1
}
