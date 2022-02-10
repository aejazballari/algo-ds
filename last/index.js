const {LinkedList} = require('../linkedlist')
const list = new LinkedList()

function last(list, n) {
    let slow = list.getFirst()
    let fast = list.getFirst()
    while(n>0) {
        fast = fast.next;
        n--
    }
    while(fast.next) {
        slow = slow.next;
        fast = fast.next
    }
    return slow
}