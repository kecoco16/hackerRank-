function main (n) {
  const newN = n.split(',')
  const arr = []
  for (let i = 0; i < 6; i++) {
    arr[i] = newN[i].split(' ')
    arr[i] = arr[i].map(Number)
  }
  let suma = 0
  let mayor = -999999
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      suma = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
      mayor = (suma > mayor) ? suma : mayor
    }
  }
  console.log(mayor)
}

const n = `1 1 1 0 0 0,0 1 0 0 0 0,1 1 1 0 0 0,0 0 2 4 4 0,0 0 0 2 0 0,0 0 1 2 4 0`
main(n)
