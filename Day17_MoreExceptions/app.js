class Calculator {
    power(n,p) {
        return (n >= 0 && p >= 0) ? Math.pow(n,p) : 'n and p should be non-negative'
    }
}

const myCalculator = new Calculator()

console.log(myCalculator.power(3,5))
console.log(myCalculator.power(2,4))
console.log(myCalculator.power(-1,-2))
console.log(myCalculator.power(-1,3))