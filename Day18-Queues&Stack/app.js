function main () {
  this.stack = []
  this.queue = []

  main.prototype.pushCharacter = this.stack.push
  main.prototype.popCharacter = this.stack.pop
  main.prototype.enqueueCharacter = this.queue.push
  main.prototype.dequeueCharacter = this.queue.shift
}

main()
