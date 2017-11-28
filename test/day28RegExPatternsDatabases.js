const regEx = email => {
  const gmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@gmail.com$/
  return gmail.test(email[1])
}

const main = array => {
  const emails = array.sort()
  const gmail = emails.filter(regEx).map(email => email[0])
  return gmail
}

export default main
