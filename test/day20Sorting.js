const getOrder = (x, y, array) => {
  let orderArray = array
  if (array[y] > array[x]) {
    const Menor = orderArray[x]
    orderArray[x] = orderArray[y]
    orderArray[y] = Menor
    return orderArray
  }
}

const getResult = (length, array) => {
  let moves = 0
  let orderArray = []
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      const order = getOrder(j + 1, j, array)
      if (order !== undefined) {
        moves++
        orderArray = order
      }
    }
  }
  return {
    moves,
    orderArray
  }
}

const main = x => {
  const array = x.split(' ').map(Number)
  const length = array.length
  const result = getResult(length, array)
  return `Array is sorted in ${result.moves} swaps. First Element: ${result.orderArray[0]} Last Element: ${result.orderArray[length - 1]}`
}

export default main
