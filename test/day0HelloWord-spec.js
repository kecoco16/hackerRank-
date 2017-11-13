'use strict'

import { expect } from 'chai'
import day0 from './day0HelloWord'

describe('Day 0 Hello Word', () => {
  it('Should Hello, World. Welcome to 30 Days of Code!', () => {
    const welcome = 'Welcome to 30 Days of Code!'
    const response = day0(welcome)
    expect(response).to.be.an('string')
    expect(response).to.be.equal(`Hello, World.${welcome}`)
  })
})
