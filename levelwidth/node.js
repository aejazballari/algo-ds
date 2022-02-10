class Node {
    constructor(data) {
        this.data = data;
        this.children = []
    }
    add(data) {
        this.children.push(new Node(data))
    }
} 

const root = new Node(100);
root.add(20)
root.add(10)
root.add(15)
root.children[0].add(18)
root.children[0].add(28)
root.children[0].add(38)
root.children[2].add(48)
console.log(root.children[0]);
module.exports = root