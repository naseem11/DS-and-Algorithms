class Node {
    constructor(value, previous = null, next = null) {
        this.value = value;
        this.previous = previous;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
     /******************PUSH METHOD**************************/
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
     /******************PUSH METHOD**************************/
    pop() {
        if (!this.head)
            return null;
        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.previous;
            this.tail.next = null;
            poppedNode.previous = null;

        }

        this.length--;
        return poppedNode;


    }
}