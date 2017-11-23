function Person (initialAge) {
  let age = initialAge
  this.amIOld = function () {
    if (age <= 12 && age >= 0) {
      console.log('You are young.')
    } else if (age <= 17 && age >= 13) {
      console.log('You are a teenager.')
    } else if (age >= 18) {
      console.log('You are old.')
    } else {
      console.log('Age is not valid, setting age to 0.')
      age = 0
      this.amIOld()
    }
  }
  this.yearPasses = function () {
    age++
  }
}

const p = new Person(4)
p.amIOld()
