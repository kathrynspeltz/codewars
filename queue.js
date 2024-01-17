/* Create a queue data structure. 
The queue should be a class with methods 'add' and 'remove'
Adding to the queue should store an element until it is removed */

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record)
    }

    remove() {
        return this.data.pop();
    }
}
