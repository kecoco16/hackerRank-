const main = input => {
  input = input.split('\n')
  const N = parseInt(input[0])
  let phonebook = []

  for (let i = 0; i < N; i++) {
    const line = input[i + 1].split(' ')
    phonebook[line[0]] = line[1]
  }

  for (let j = N + 1; j < input.length; j++) {
    const name = input[j]
    const num = phonebook[name]
    console.log(num ? `${name}=${num}` : `Not found`)
  }
}

const input = `3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`

main(input)
