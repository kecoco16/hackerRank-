'use strict'

import { expect } from 'chai'
import day8 from './day8DiccionariesMaps'

describe('Day 8 diccionaries maps', () => {
  it('Should if an entry for name is not found, print Not found instead.', () => {
    const input = `3,sam 99912222,tom 11122222,harry 12299933,sam,edward,harry`
    const output = ['sam=99912222', 'Not found', 'harry=12299933']
    const response = day8(input)
    expect(response).to.be.an('array')
    expect(response).to.be.eql(output)
  })
})
