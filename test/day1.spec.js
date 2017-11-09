'use strict'

import { expect } from 'chai'
import { day0, day1 } from './main'

describe('Day 1 of 30 Days of code Hacker Rank', () => {
  it('Expect output = 16 8.0 HackerRank is the best place to learn and practice coding!', () => {
    const response = day1()
    expect(response).to.be.an('string')
    expect(response).to.be.equal(`16 8.0 HackerRank is the best place to learn and practice coding!`)
  })
})
