class Queue {
    constructor() {
        this.data = []
    }

    add (record) {
        this.data.unshift(record)
    }

    remove (arr) {
        return arr.pop()
    }

    peek (arr) {
        return arr[arr.length-1]
    }
}

function weave (arr1, arr2) {
    const queue = new Queue()
    while(queue.peek(arr1) || queue.peek(arr2)) {
        if(queue.peek(arr1)) {
            queue.add(queue.remove(arr1))
        }
        if(queue.peek(arr2)) {
            queue.add(queue.remove(arr2))
        }
    }
    return queue
}

console.log(weave([1,2,3,4], [6,7,8]));