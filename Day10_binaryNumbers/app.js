const main = n => {
  const base2 = n.toString(2).split('')
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
  console.log(maxTemp > max ? maxTemp : max)
}

main(5)
main(13)
