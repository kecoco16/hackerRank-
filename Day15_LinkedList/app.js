function main () {
  this.insert = function (head, data) {
    if (head == null) {
      return new Node(data)
    }

    var tmp = head
    while (tmp.next != null) {
      tmp = tmp.next
    }
    tmp.next = new Node(data)

    return head
  }
}
