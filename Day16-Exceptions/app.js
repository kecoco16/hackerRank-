const main = S => {
  let response = parseInt(S).toString()
  response = response.replace('NaN', 'Bad String')
  console.log(response)
}

main(3)
main('za')
