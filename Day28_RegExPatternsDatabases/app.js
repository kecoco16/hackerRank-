function main () {
  const N = parseInt(readLine())
  let array = []
  for (let i = 0; i < N; i++) {
    array.push(readLine().split(' '))
  }
  const arrayOrdenado = array.sort()
  arrayOrdenado.map((array) => {
    if (array[1].includes('@gmail.com')) {
      console.log(array[0])
    }
  })
}
