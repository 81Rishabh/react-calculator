export class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
    this.top = 0;
  }

  isEmpty() {
    if (this.size == 0) return true;
  }

  getSize() {
    return this.size;
  }
  
  push(item) {
    this.stack[this.top] = item;
    this.top += 1;
    this.size++;
  }

  pop() {
    if(this.isEmpty()) {
      return 0;
    }
    var data = this.stack.pop(this.top);
    this.top -= 1;
    this.size -= 1;
    return data;
  }

  // get top element
  peek() {
     if(this.isEmpty()) {
        return 0;
     }
    var data = this.stack[this.top-1];   
     return data;
  }
}
