'use strict'

import { expect } from 'chai'
import day18 from './day18Queues&Stack'

describe('Day 18 Queues & Stack', () => {
  it('Should if a given string is a palindrome or not', () => {
    const inputs = ['racecar', 'palindrome']
    for (let i = 0; i < inputs.length; i++) {
      const reverse = inputs[i]
        .split('')
        .reverse()
        .join('')
      const response =
        reverse === inputs[i]
          ? `The word, ${inputs[i]}, is a palindrome.`
          : `The word, ${inputs[i]}, is not a palindrome.`
      const output = day18(inputs[i])
      expect(output).to.be.an('string')
      expect(output).to.be.equal(response)
    }
  })
})
