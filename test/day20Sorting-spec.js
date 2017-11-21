'use strict'

import { expect } from 'chai'
import day20 from './day20Sorting'

describe('Day 20 sorting', () => {
  it('Should ', () => {
    const input = '3 2 1'
    const output = `Array is sorted in 3 swaps. First Element: 1 Last Element: 3`
    const response = day20(input)
    expect(response).to.be.an('string')
    expect(response).to.be.equal(output)
  })
})
