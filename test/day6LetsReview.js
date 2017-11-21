const day6 = input => {
  const palabras = input.split(' ')
  const cantidad = palabras[0]
  const output = []
  let par = ''
  let impar = ''
  for (let i = 0; i < cantidad; i++) {
    const palabra = palabras[i + 1]
    const letras = palabra.split('')

    for (let j = 0; j < palabra.length; j++) {
      if (j % 2 == 0) {
        par += letras[j]
      } else {
        impar += letras[j]
      }
    }
    output.push(`${par} ${impar}`)
    par = ''
    impar = ''
  }
  return output
}

export default day6
