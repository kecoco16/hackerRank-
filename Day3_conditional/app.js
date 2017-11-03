
function main (n) {
  const N = parseInt(n)
  if (N % 2 === 1) {
    console.log('Weird')
    return
  }
  if (N >= 6 && N <= 20) {
    console.log('Weird')
    return
  }
  console.log('Not Weird')
}

main(3)
main(24)
