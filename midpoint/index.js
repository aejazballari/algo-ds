const {LinkedList} = require('../linkedlist')
const list = new LinkedList()
function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    return slow
}
list.insertFirst(15)
list.insertFirst(10)
list.insertFirst(50)
list.insertFirst(100)
list.insertFirst(25)
list.insertFirst(125)
list.insertFirst(150)
console.log(list);
console.log(midpoint(list));