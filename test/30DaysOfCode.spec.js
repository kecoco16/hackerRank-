'use strict'

import { expect } from 'chai'
import { day0, day1 } from './main'

describe('30 Days of code', async () => {
  it('Day 0 Expect output = Hello, World. Welcome to 30 Days of Code!', async () => {
    const response = await day0('Welcome to 30 Days of Code!')
    expect(response).to.be.an('string')
    expect(response).to.be.equal(`Hello, World.Welcome to 30 Days of Code!`)
  })

  it('Day 1 Expect output = 16 8.0 HackerRank is the best place to learn and practice coding!', async () => {
    const response = await day1()
    expect(response).to.be.an('string')
    expect(response).to.be.equal(`16 8.0 HackerRank is the best place to learn and practice coding!`)
  })
})
