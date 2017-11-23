function main (numeros) {
  const arr = numeros.split(' ').map(Number)
  let result = ''
  arr.reverse().map(number => {
    result += `${number}`
  })
  console.log(result)
}

main(`1 4 3 2`)
