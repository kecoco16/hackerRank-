'use strict'

import { expect } from 'chai'
import day5 from './Day5Loop'

describe('Day 5 loop', () => {
  it('Should a multiplication list of a number', () => {
    const input = 2
    const outputs = [
      `${input} x ${1} = ${input * 1}`,
      `${input} x ${2} = ${input * 2}`,
      `${input} x ${3} = ${input * 3}`,
      `${input} x ${4} = ${input * 4}`,
      `${input} x ${5} = ${input * 5}`,
      `${input} x ${6} = ${input * 6}`,
      `${input} x ${7} = ${input * 7}`,
      `${input} x ${8} = ${input * 8}`,
      `${input} x ${9} = ${input * 9}`,
      `${input} x ${10} = ${input * 10}`
    ]
    const response = day5(input)
    expect(response).to.be.an('array')
    for (let i = 0; i < 10; i++) {
      expect(response[i]).to.be.equal(outputs[i])
    }
  })
})
