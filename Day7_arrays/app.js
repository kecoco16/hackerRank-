function main (numeros) {
  let n = parseInt(numeros)
  arr = numeros.split(' ')
  arr = arr.map(Number)
  let result = ''
  arr = arr.reverse()
    .map(number => {
      result += `${number}`
    })
  console.log(result)
}

main(`1 4 3 2`)
