class book {
  constructor (title, author) {
    this.title = title
    this.author = author
  }

  display () {
    console.log('Implement the \'display\' method!')
  }
}

class myBook extends book {
  constructor (title, author, price) {
    super(title, author)
    this.price = price
  }

  display () {
    return `Title:${this.title} Author:${this.author} Price:${this.price}`
  }
}

export default myBook
