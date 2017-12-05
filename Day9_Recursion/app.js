const factorial = n => (n === 0 ? 1 : n * factorial(n - 1))

function main (n) {
  console.log(factorial(n))
}

main(3)
