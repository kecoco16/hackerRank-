const day7 = numeros => {
  let n = parseInt(numeros)
  let arr = numeros.split(' ')
  arr = arr.map(Number)
  let result = ''
  arr = arr.reverse()
        .map(number => {
          result += `${number}`
        })
  return result
}

export default day7
