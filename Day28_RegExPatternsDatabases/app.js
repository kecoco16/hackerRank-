const regExp = email => {
  const regEx = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@gmail.com$/
  return regEx.test(email)
}

const isGmail = (email) => {
  return regExp(email[1])
}

const main = array => {
  const emails = array.sort()
  const gmail = emails.filter(isGmail).map(email => email[0])
  console.log(gmail)
}

const input = [
  ['riya', 'riya@gmail.com'],
  ['julia', 'julia@julia.me'],
  ['julia', 'sjulia@gmail.com'],
  ['julia', 'julia@gmail.com'],
  ['samantha', 'samantha@gmail.com'],
  ['tanya', 'tanya@gmail.com']
]

main(input)
