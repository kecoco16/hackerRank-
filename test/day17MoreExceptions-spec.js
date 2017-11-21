'use strict'

import { expect } from 'chai'
import power from './day17MoreExceptions'

describe('Day 17 more exceptions', () => {
  it('Should the result of power(n,p), if n or p are negative return n and p should be non-negative', () => {
    const n = 3
    const p = -6
    const positive = power(n, n)
    const negative = power(n, p)
    expect(positive).to.be.an('number')
    expect(positive).to.be.equal(Math.pow(n, n))
    expect(negative).to.be.an('string')
    expect(negative).to.be.equal('n and p should be non-negative')
  })
})
