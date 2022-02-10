class Stack {
    constructor () {
        this.data = []
    }

    add (value) {
        this.data.push(value)
    }

    pop () {
      return this.data.pop()
    }

    peak () {
       return this.data[this.data.length -1]
    }
}

class Queue {
    constructor() {
        this.first =  new Stack()
        this.second =  new Stack()
    }

    add(record) {
        this.first.add(record)
    }

    remove(){
        while (this.first.peak()) {
            this.second.add(this.first.pop())   
        }
        console.log(this.second);
        const record = this.second.pop();
        while (this.second.peak()) {
            this.first.add(this.second.pop())  
        }
        return record
    }

    peek(){
        while (this.first.peak()) {
            this.second.add(this.first.pop())   
        }
        const record = this.second.peak();
        while (this.second.peak()) {
            this.first.add(this.second.pop())  
        }
        return record
    }
}

const queue = new Queue()
queue.add('hi there!')
queue.add("aejaz")
queue.add("ahmed")
queue.add("ballari")
console.log(queue.peek());
console.log(queue.first);

