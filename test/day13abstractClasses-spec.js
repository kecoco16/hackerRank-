'use strict'

import { expect } from 'chai'
import MyBook from './day13abstractClasses'

describe('Day 13 abstract classes', () => {
  it('Should the information of the book', () => {
    const title = 'Title'
    const author = 'Author'
    const price = 100
    const book = new MyBook(title, author, price)
    const showInformation = book.display()
    expect(showInformation).to.be.an('string')
    expect(showInformation).to.be.eql(`Title:${title} Author:${author} Price:${price}`)
  })
})
