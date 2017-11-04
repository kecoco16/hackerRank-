function main () {
  const N = parseInt(readLine())
  let arr = []
  for (let i = 0; i < N; i++) {
    arr.push(readLine().split(' '))
  }
  const arrayOrdenado = arr.sort()
  arrayOrdenado.map((array) => {
    if (array[1].includes('@gmail.com')) {
      console.log(array[0])
    }
  })
}
