'use strict'

import { expect } from 'chai'
import { day1 } from './main'

describe('30 Days of code', async () => {
  it('Day 1 Expect output = Hello, World. Welcome to 30 Days of Code!', async () => {
    const response = await day1('Welcome to 30 Days of Code!')
    expect(response).to.be.an('string')
    expect(response).to.be.equal(`Hello, World.
  Welcome to 30 Days of Code!`)
  })
})
