'use strict'

import { expect } from 'chai'
import day3 from './day3Conditional'

describe('Day 3 conditional', () => {
  it('Should Weird if is in the inclusive range of 6 to 20 output or if not should Not Weird', () => {
    const weird = 3
    const notWeird = 24
    const responseWeird = day3(weird)
    const responseNotWeird = day3(notWeird)
    expect(responseWeird).to.be.an('string')
    expect(responseWeird).to.be.equal(`Weird`)
    expect(responseNotWeird).to.be.an('string')
    expect(responseNotWeird).to.be.equal(`Not Weird`)
  })
})
