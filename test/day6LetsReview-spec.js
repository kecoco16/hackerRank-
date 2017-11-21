'use strict'

import { expect } from 'chai'
import day6 from './day6LetsReview'

describe('Day 6 lest review', () => {
  it('Should par and impar characters of a word separated whit a space', () => {
    const input = `2 Hacker Rank`
    const output = ['Hce akr', 'Rn ak']
    const response = day6(input)
    expect(response).to.be.an('array')
    expect(response[0]).to.be.equal(output[0])
    expect(response[1]).to.be.equal(output[1])
  })
})
