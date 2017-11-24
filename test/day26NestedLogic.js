const dateExpects = (dates) => {
  const output = []
  dates.map(date => {
    const test = date.split(' ').map(Number)
    output.push(test)
    output.push(new Date(test[2], test[1] - 1, test[0]))
  })
  return output
}

const result = dates => {
  if (dates[1] <= dates[3]) {
    return 0
  } else if (dates[0][1] === dates[2][1] && dates[0][2] === dates[2][2]) {
    return 15 * (dates[0][0] - dates[2][0])
  } else if (dates[0][2] === dates[2][2]) {
    return 500 * (dates[0][1] - dates[2][1])
  } else {
    return 10000
  }
}

const main = input => {
  const dates = input.split(' - ')
  const expectDates = dateExpects(dates)
  return result(expectDates)
}

export default main
