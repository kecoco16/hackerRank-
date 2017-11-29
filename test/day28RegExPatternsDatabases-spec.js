'use strict'

import { expect } from 'chai'
import isGmail from './day28RegExPatternsDatabases'

describe('Day 28 Reg Ex Patterns Databases', () => {
  it('Should alphabetically-ordered list of people whose email address ends in gmail', () => {
    const input = [
      ['riya', 'riya@gmail.com'],
      ['julia', 'julia@julia.me'],
      ['julia', 'sjulia@gmail.com'],
      ['julia', 'julia@gmail.com'],
      ['samantha', 'samantha@gmail.com'],
      ['tanya', 'tanya@gmail.com']
    ]
    const output = ['julia', 'julia', 'riya', 'samantha', 'tanya']
    const response = isGmail(input)
    expect(response).to.be.an('array')
    expect(response).to.be.eql(output)
  })
})
