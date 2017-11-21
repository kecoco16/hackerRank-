'use strict'

import { expect } from 'chai'
import day10 from './day10BinaryNumbers'

describe('Day 10 binary numbers', () => {
  it('Should the maximum number of consecutive 1 in binary representation.', () => {
    const inputs = [5, 13]
    const outputs = [1, 2]
    for (let i = 0; i < inputs.length; i++) {
      const response = day10(inputs[i])
      expect(response).to.be.an('number')
      expect(response).to.be.equal(outputs[i])
    }
  })
})
