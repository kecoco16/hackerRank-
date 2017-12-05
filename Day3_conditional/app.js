const main = n => {
  const N = parseInt(n)
  if ((N % 2 === 1 || N >= 6) && N <= 20) {
    return console.log('Weird')
  }
  console.log('Not Weird')
}

main(3)
main(24)
