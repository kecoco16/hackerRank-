'use strict'

import { expect } from 'chai'
import day9 from './day9Recursion'

describe('Day 9 recursion', () => {
  it('Should the result of the factorial', () => {
    const input = 3
    const output = 6
    const response = day9(input)
    expect(response).to.be.an('number')
    expect(response).to.be.equal(output)
  })
})
