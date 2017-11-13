'use strict'

import { expect } from 'chai'
import day7 from './day7Arrays'

describe('Day 7 arrays', () => {
  it('Should elements in reverse order', () => {
    const input = `1 4 3 2`
    const output = input.split(' ').reverse().join('')
    const response = day7(input)
    expect(response).to.be.an('string')
    expect(response).to.be.equal(output)
  })
})
