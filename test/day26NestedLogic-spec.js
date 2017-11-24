'use strict'

import { expect } from 'chai'
import main from './day26NestedLogic'

describe('Day 26 nested logic', () => {
  it('Should 0 if the firt date is older the other one', () => {
    const input = `6 6 2015 - 9 6 2015`
    const output = 0
    const response = main(input)
    console.log(response)
    expect(response).to.be.an('number')
    expect(response).to.be.equal(output)
  })

  it('Should 45 if the two dates have the same month and year 15*(the number of date late)', () => {
    const input = `9 6 2015 - 6 6 2015`
    const output = 45
    const response = main(input)
    expect(response).to.be.an('number')
    expect(response).to.be.equal(output)
  })

  it('Should 500 if the two dates have the same year 500*(the number of months late)', () => {
    const input = `6 7 2015 - 6 6 2015`
    const output = 500
    const response = main(input)
    expect(response).to.be.an('number')
    expect(response).to.be.equal(output)
  })

  it('Should 10000 if the first date have most recent year)', () => {
    const input = `6 7 2017 - 6 6 2015`
    const output = 10000
    const response = main(input)
    console.log(response)
    expect(response).to.be.an('number')
    expect(response).to.be.equal(output)
  })
})
