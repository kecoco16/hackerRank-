const day7 = numeros => {
  const arr = numeros.split(' ').map(Number)
  let result = ''
  arr.reverse().map(number => {
    result += `${number}`
  })
  return result
}

export default day7
