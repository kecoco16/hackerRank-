function main (x) {
  const n = parseInt(x)
  const a = x.split(' ').map(Number)

  let movimientos = 0

  const ordenar = (x, y, array) => {
    if (a[y] > a[x]) {
      const Menor = array[x]
      array[x] = array[y]
      array[y] = Menor
      movimientos++
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      ordenar(j + 1, j, a)
    }
  }

  console.log(`Array is sorted in ${movimientos} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[n - 1]}`)
}

main(`3 2 1`)
