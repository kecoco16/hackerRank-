function isGmail (email) {
  var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@gmail.com$/
  return re.test(email)
}

function main () {
  const array = [['riya', 'riya@gmail.com'], ['julia', 'julia@julia.me'], ['julia', 'sjulia@gmail.com']]
  const arrayOrdenado = array.sort()
  arrayOrdenado.map((array) => {
    if (isGmail(array[1])) {
      console.log(array[0])
    }
  })
}

main()
