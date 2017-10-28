class MyBook extends Book {
    // Write your constructor here
        constructor(title, author, price) {
        super(title, author)
        this.price = price
    }
    // Write your method here
    display(){
        console.log(`Title: ${this.title}`)
        console.log(`Author: ${this.author}`)
        console.log(`Price: ${this.price}`)
    }
}