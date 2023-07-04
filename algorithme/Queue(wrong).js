class Queue {
  constructor() {
      this.items = []
  }

  enqueue(element) {
      this.items.push(element)
  }
  dequeue() {
      return this.items.shift() // shift()는 선형시간으로 돌아가서 스택에서 사용불가.
  }

  isEmpty() {
      return this.items.length === 0
  }

  peek() {
      if(!this.isEmpty()) {
          return this.items[0]
      } 
      return null
  }

  size() {
      return this.items.length
  }

  print() {
      console.log(this.items.toString())
  }

}

const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size())
queue.print()

console.log(queue.dequeue()) // 먼저 넣은게 배열의 [0]가 되어, shift()를 통해 먼저 제거된다.
console.log(queue.peek()) // [0]이 제거된 후 배열의 다음 값인 [1]이 출력된다.