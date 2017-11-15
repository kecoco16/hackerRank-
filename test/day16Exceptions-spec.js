'use strict'

import { expect } from 'chai'
import day16 from './day16Exceptions'

describe('Day 16 exceptions', () => {
  it('Should bad String if not a number', () => {
    const inputs = ['3', 'test']
    const isNumber = day16(inputs[0])
    const notNumber = day16(inputs[1])
    expect(isNumber).to.be.an('string')
    expect(isNumber).to.be.equal(inputs[0])
    expect(notNumber).to.be.an('string')
    expect(notNumber).to.be.equal('Bad String')
  })
})
