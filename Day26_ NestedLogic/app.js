function main (input) {
  const fechas = input.split('\n')
  const date = fechas[0].split(' ').map(Number)
  const dateExpect = fechas[1].split(' ').map(Number)
  const thisDate = new Date(date[2], date[1], date[0])
  const expectDate = new Date(dateExpect[2], dateExpect[1], dateExpect[0])
  let result = 0

  if (thisDate <= expectDate) {
    result = 0
  } else if (date[1] === dateExpect[1] && date[2] === dateExpect[2]) {
    result = 15 * (date[0] - dateExpect[0])
  } else if (date[2] === dateExpect[2]) {
    result = 500 * (date[1] - dateExpect[1])
  } else {
    result = 10000
  }

  console.log(result)
}

main(`9 6 2015
6 6 2015`)
