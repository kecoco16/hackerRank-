class Person {
  constructor (firstName, lastName, identification) {
    this.firstName = firstName
    this.lastName = lastName
    this.idNumber = identification
  }

  printPerson () {
    console.log(
      'Name: ' +
        this.lastName +
        ', ' +
        this.firstName +
        '\nID: ' +
        this.idNumber
    )
  }
}

class Student extends Person {
  constructor (firstName, lastName, id, scores) {
    super(firstName, lastName, id)
    this.scores = scores
  }
  calculate () {
    const suma = this.scores.reduce((anterior, actual) => anterior + actual, 0)
    const promedio = suma / this.scores.length

    if (promedio < 40) return 'T'

    if (promedio < 55) return 'D'

    if (promedio < 70) return 'P'

    if (promedio < 80) return 'A'

    if (promedio < 90) return 'E'

    return 'O'
  }
}

let s = new Student('kevin', 'castillo', 1, [54])
s.printPerson()
console.log('Grade: ' + s.calculate())
