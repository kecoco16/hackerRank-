class book {
  constructor (title, author) {
    this.title = title
    this.author = author
  }
}

class MyBook extends book {
  constructor (title, author, price) {
    super(title, author)
    this.price = price
  }

  display () {
    console.log(`Title: ${this.title}`)
    console.log(`Author: ${this.author}`)
    console.log(`Price: ${this.price}`)
  }
}

const title = 'Title'
const author = 'Author'
const price = 100
const myBook = new MyBook(title, author, price)
myBook.display()
