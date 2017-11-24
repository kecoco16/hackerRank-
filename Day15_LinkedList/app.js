function Node (data) {
  this.data = data
  this.next = null
}

function Solution () {
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
  this.display = function (head) {
    console.log(head)
  }
}

function main () {
  const T = [2, 3, 4, 1]
  let head = null
  const mylist = new Solution()
  for (let i = 0; i < T.length; i++) {
    const data = T[i]
    head = mylist.insert(head, data)
  }
  mylist.display(head)
}

main()
