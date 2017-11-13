function Phonebook (input, N) {
  const phonebook = []
  for (let i = 0; i < N; i++) {
    const line = input[i + 1].split(' ')
    phonebook[line[0]] = line[1]
  }
  return phonebook
}

function Output (input, phonebook, N) {
  const output = []
  for (let j = N + 1; j < input.length; j++) {
    const name = input[j]
    const num = (phonebook[name])
    output.push(num ? `${name}=${num}` : `Not found`)
  }
  return output
}

function day8 (input) {
  input = input.split(',')
  const N = parseInt(input[0])
  const phonebook = Phonebook(input, N)
  return Output(input, phonebook, N)
}

export default day8
