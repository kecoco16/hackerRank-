function isGmail (email) {
  const regEx = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@gmail.com$/
  return regEx.test(email)
}

function main (array) {
  const emails = array
  const response = []
  emails.map((email) => {
    if (isGmail(email[1])) {
      response.push(email[0])
    }
  })
  return response
}

export default main
