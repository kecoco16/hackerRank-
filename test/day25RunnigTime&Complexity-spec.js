'use strict'

import { expect } from 'chai'
import day25 from './day25RunnigTime&Complexity'

describe('Day 25 Runnig Time & Complexity', () => {
  it('Should if N is prime or not prime', () => {
    const input = `12 5 7`
    const output = ['Not prime', 'Prime', 'Prime']
    const response = day25(input)
    expect(response).to.be.an('array')
    expect(response).to.be.eql(output)
  })
})
