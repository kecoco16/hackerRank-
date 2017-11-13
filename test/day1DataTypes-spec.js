'use strict'

import { expect } from 'chai'
import day1 from './day1DataTypes'

describe('Day 1 data types', () => {
  it('Should 16 8.0 HackerRank is the best place to learn and practice coding!', () => {
    const response = day1()
    expect(response).to.be.an('string')
    expect(response).to.be.equal(`16 8.0 HackerRank is the best place to learn and practice coding!`)
  })
})
