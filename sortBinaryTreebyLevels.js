/*  You are given a binary tree: 
Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, then root children (from left to right) are second and third, and so on.
Return empty array if root is null. */

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function treeByLevels(rootNode) {
    if (rootNode == null) return []
    const result = []
    const stack = [rootNode];
    while (stack.length > 0) {
        const current = stack.shift();
        result.push(current.value)
        if (current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)


    }
    return result
}

console.log(treeByLevels())