'use strict'

import { expect } from 'chai'
import isString from './day16Exceptions'

describe('Day 16 exceptions', () => {
  it('Should bad String if not a number', () => {
    const inputs = ['3', 'test']
    const isNumber = isString(inputs[0])
    const notNumber = isString(inputs[1])
    expect(isNumber).to.be.an('string')
    expect(isNumber).to.be.equal(inputs[0])
    expect(notNumber).to.be.an('string')
    expect(notNumber).to.be.equal('Bad String')
  })
})
