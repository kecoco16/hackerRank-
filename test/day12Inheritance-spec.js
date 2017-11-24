'use strict'

import { expect } from 'chai'
import Student from './day12Inheritance'

describe('Day 12 inheritance', () => {
  it('Should the information and average of the student', () => {
    const firstName = 'Kevin'
    const lastName = 'Castillo'
    const id = 1
    const scores = [100, 80]
    const student = new Student(firstName, lastName, id, scores)
    const printStudent = student.printPerson()
    const average = student.calculate()
    expect(printStudent).to.be.an('string')
    expect(printStudent).to.be.eql(`firstName:${firstName} lastName:${lastName} ID:${id}`)
    expect(average).to.be.an('string')
    expect(average).to.be.eql('O')
  })
})
