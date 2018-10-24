class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {

        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        //If list is empty
        if (!this.head)
            return null;
        // if has only one node    
        if (!this.head.next) {
            this.tail = null;
            this.length = 0;
            let returnNode = this.head;
            this.head = null;
            return returnNode;
        }
        //if list has more than one node        
        let currentNode = this.head;
        let previousNode = this.head;
        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
        this.tail = previousNode;
        this.length--;
        return currentNode;

    }

    shift() {

        //If list is empty
        if (!this.head)
            return null;
        // if has only one node 
        let returnNode = this.head;
        if (!this.head.next) {
            this.tail = null;
            this.length = 0;
            this.head = null;
            return returnNode;
        }
        //if list has more than one node  
        this.head = this.head.next;
        this.length--;
        return returnNode;
    }


}