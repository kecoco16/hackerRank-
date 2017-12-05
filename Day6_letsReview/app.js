function main (input) {
  const palabras = input.split('\n')
  const cantidad = palabras[0]

  for (let i = 0; i < cantidad; i++) {
    const palabra = palabras[i + 1]
    const letras = palabra.split('')
    let par = ''
    let impar = ''

    for (let j = 0; j < palabra.length; j++) {
      if (j % 2 === 0) {
        par += letras[j]
      } else {
        impar += letras[j]
      }
    }

    console.log(`${par} ${impar}`)
  }
}
const input = `2
Hacker
Rank`

main(input)
