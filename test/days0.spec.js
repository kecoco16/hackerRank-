'use strict'

import { expect } from 'chai'
import { day0, day1 } from './main'

describe('Day 0 of 30 Days of code Hacker Rank', () => {
  it('Expect output = Hello, World. Welcome to 30 Days of Code!', () => {
    const response = day0('Welcome to 30 Days of Code!')
    expect(response).to.be.an('string')
    expect(response).to.be.equal(`Hello, World.Welcome to 30 Days of Code!`)
  })
})
