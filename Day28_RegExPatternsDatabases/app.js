function isGmail (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@gmail.com$/
  return re.test(email)
}

function main () {
  const N = parseInt(readLine())
  const array = []
  for (let i = 0; i < N; i++) {
    array.push(readLine().split(' '))
  }
  const arrayOrdenado = array.sort()
  arrayOrdenado.map((array) => {
    if (isGmail(array[1])) {
      console.log(array[0])
    }
  })
}
