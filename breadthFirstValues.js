/* write a function that takes in the root of a binary tree, the function should return an array containing all the values of the tree in breadth-first order */

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}


const breadthFirstValues = (root) => {
    if (root == null) return []
    let returnArr = []
    let queueArr = [root]

    while (queueArr.length > 0) {
        const current = queueArr.shift();
        returnArr.push(current.val)
        if (current.left != null) queueArr.push(current.left);
        if (current.right != null) queueArr.push(current.right);
    }
    return returnArr
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//     / \
//    b    c
//   / \    \
//  d   e    f

console.log(breadthFirstValues(a))