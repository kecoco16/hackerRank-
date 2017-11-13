function day8 (input) {
  input = input.split(',')
  const N = parseInt(input[0])
  let phonebook = []
  const output = []
  for (let i = 0; i < N; i++) {
    const line = input[i + 1].split(' ')
    phonebook[line[0]] = line[1]
  }

  for (let j = N + 1; j < input.length; j++) {
    const name = input[j]
    const num = (phonebook[name])
    output.push(num ? `${name}=${num}` : `Not found`)
  }
  return output
}

export default day8
