class Stack{
  constructor() {
    this.items = [];
  }

  enstack(element) {
    this.items.push(element);
  }
  destack(){
    return this.items.pop() // stack은 push랑 pop으로 구현 가능
  }

  isEmpty(){
    return this.items.length === 0;
  }

  peek() {
    if(!this.isEmpty()){
      return this.items[this.items.length-1]
    }
    return null
  }

  size() {
    return this.items.length;
  }

  print(){
    console.log(this.items.toString())
  }
}

const stack = new Stack();
console.log(stack.isEmpty())

stack.enstack(20);
stack.enstack(30);
stack.enstack(50);
console.log(stack.size());
stack.print()

console.log(stack.destack());
stack.print();