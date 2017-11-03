function main () {
  const i = 4
  const d = 4.0
  const s = 'HackerRank'

    // Declare second integer, double, and String variables.
  let integer
  let double
  let string

    // Read and save an integer, double, and String to your variables.
  integer = parseInt(12)
  double = parseFloat(4.0)
  string = 'is the best place to learn and practice coding!'

    // Print the sum of both integer variables on a new line.
  console.log(i + integer)
    // Print the sum of the double variables on a new line.
  console.log((d + double).toFixed(1))
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
  console.log(s + string)
}
main()
