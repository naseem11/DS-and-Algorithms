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
    /******************PUSH METHOD**************************/
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
    /******************POP METHOD**************************/
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
    /******************SHIFT METHOD**************************/
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

    /******************UNSHIFT METHOD**************************/
    unshift(value) {
        if (!this.head) {
            this.push(new Node(value));
        } else {

            this.head = new Node(value, this.head)
            this.length++;


        }
        return this;


    }
    /******************GET METHOD**************************/
    getAt(index) {

        // If index is out of bound return null
        if (index < 0 || index >= this.length)
            return null;
        let nodeCounter = 0;
        let currentNode = this.head;
        while (nodeCounter !== index) {
            nodeCounter++;
            currentNode = currentNode.next;
        }

        return currentNode;

    }

    /******************UPDATEAT METHOD**************************/
    updateAt(index, value) {
        const nodeToUpdate = this.getAt(index);
        if (nodeToUpdate) {
            nodeToUpdate.value = value;
            return true;

        }
        return false;

    }

    /******************INSERTAT METHOD**************************/

    insertAt(index, value) {
        // If index is out of bound return false
        if (index < 0 || index > this.length)
            return false;
        // If inserting at last   
        if (index === this.length)
            return !!this.push(value);
        // If inserting at 0 index    
        if (index === 0)
            return !!this.unshift(value);
        // If inserting somewhere in between  
        const nodeAtThatIndex = this.getAt(index);
        const previousNode = this.getAt(index - 1);
        previousNode.next = new Node(value, nodeAtThatIndex);
        this.length++;
        return true;
    }

    /******************REMOVEAT METHOD**************************/

    removeAt(index) {
        if (index < 0 || index >= this.length)
            return null;
        if (index === 0)
            return this.shift();
        if (index === this.length - 1)
            return this.pop();
        const nodeToRemove = this.getAt(index);
        const previousNode = this.getAt(index - 1);
        previousNode.next = nodeToRemove.next;
        this.length--;
        return nodeToRemove;
    }

    /******************REVERSE METHOD**************************/
    reverse() {
        
        let currentNode = this.head;
        let nextNode = null;
        let previousNode = null;
        // swap the head and tail
        this.head=this.tail;
        this.tail = currentNode;
        

        for (let i = 0; i < this.length; i++) {
            //  repeat the following for each node in the list
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;

        }

        return this;
    }

}


