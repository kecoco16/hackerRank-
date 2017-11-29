function Person (initialAge) {
  let age = initialAge
  this.amIOld = function () {
    if (age <= 12 && age >= 0) {
      return console.log('You are young.')
    }
    if (age <= 17 && age >= 13) {
      return console.log('You are a teenager.')
    }
    if (age >= 18) {
      return console.log('You are old.')
    }
    age = 0
    this.amIOld()
    return console.log('Age is not valid, setting age to 0.')
  }
  this.yearPasses = function () {
    age++
  }
}

const p = new Person(4)
p.amIOld()
