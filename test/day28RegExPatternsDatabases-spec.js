'use strict'

import { expect } from 'chai'
import isGmail from './day28RegExPatternsDatabases'

describe('Day 28 Reg Ex Patterns Databases', () => {
  it('Should the name person if the email is gmail', () => {
    const input = [['julia', 'julia@julia.me'], ['samantha', 'samantha@gmail.com']]
    const output = ['samantha']
    const response = isGmail(input)
    expect(response).to.be.an('array')
    expect(response).to.be.eql(output)
  })
})
