const getPhonebook = (input, N) => {
  const phonebook = []
  for (let i = 0; i < N; i++) {
    const line = input[i + 1].split(' ')
    phonebook[line[0]] = line[1]
  }
  return phonebook
}

const getOutput = (input, phonebook, N) => {
  const output = []
  for (let j = N + 1; j < input.length; j++) {
    const name = input[j]
    const num = (phonebook[name])
    output.push(num ? `${name}=${num}` : `Not found`)
  }
  return output
}

const day8 = input => {
  const newInput = input.split(',')
  const N = parseInt(newInput[0])
  const phonebook = getPhonebook(newInput, N)
  return getOutput(newInput, phonebook, N)
}

export default day8
