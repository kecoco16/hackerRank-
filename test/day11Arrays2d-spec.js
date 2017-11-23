'use strict'

import { expect } from 'chai'
import day11 from './day11Arrays2d'

describe('Day 11 arrays 2d', () => {
  it('Should the largest (maximum) hourglass sum found in array.', () => {
    const input = `1 1 1 0 0 0,0 1 0 0 0 0,1 1 1 0 0 0,0 0 2 4 4 0,0 0 0 2 0 0,0 0 1 2 4 0`
    const output = 19
    const response = day11(input)
    expect(response).to.be.an('number')
    expect(response).to.be.equal(output)
  })
})
