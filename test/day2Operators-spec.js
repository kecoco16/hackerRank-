'use strict'

import { expect } from 'chai'
import day2 from './day2Operators'

describe('Day 2 operators', () => {
  it('Expect output = The total meal cost is 15 dollars.', () => {
    const tipPercent = 12.0
    const taxPercent = 20
    const mealCost = 8
    const response = day2(mealCost, tipPercent, taxPercent)
    const totalTip = mealCost * tipPercent / 100
    const totalTax = mealCost * taxPercent / 100
    const TotalMealCost = Math.round(mealCost + totalTip + totalTax)
    expect(response).to.be.an('string')
    expect(response).to.be.equal(
      `The total meal cost is ${TotalMealCost} dollars.`
    )
  })
})
