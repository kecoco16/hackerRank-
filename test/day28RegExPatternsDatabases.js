const isGmail = email => {
  const regEx = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@gmail.com$/
  return regEx.test(email[1])
}

const main = array => {
  const emails = array.sort()
  const gmail = emails.filter(isGmail).map(email => email[0])
  return gmail
}

export default main
