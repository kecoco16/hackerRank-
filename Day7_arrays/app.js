function main (numeros) {
  let n = parseInt(numeros)
  let arr = numeros.split(' ')
  arr = arr.map(Number)
  let result = ''
  arr = arr.reverse()
    .map(letra => {
      result += `${letra} `
    })
  console.log(result)
}

main(`1 4 3 2`)
