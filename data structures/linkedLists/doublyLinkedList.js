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
    /******************SHIFT METHOD**************************/

    shift() {
        if (this.length === 0)
            return null;
        if (this.length === 1)
            return this.pop();
        const shiftedNode = this.head;
        this.head = this.head.next;
        this.head.previous = null;
        shiftedNode.next = null;
        this.length--;
        return shiftedNode;
    }
    /******************UNSHIFT METHOD**************************/

    unshift(value) {
        if (this.length === 0)
            return this.push(value);
        const newNode = new Node(value, null, this.head);
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    /******************GETAT METHOD**************************/

    getAt(index) {
        // If index is out of bound return null.
        if (index < 0 || index >= this.length)
            return null;
        // if index is in the first half of the list, start from the head
        let counter, nodeAtIndex;
        if (index <= this.length / 2) {
            counter = 0;
            nodeAtIndex = this.head;
            while (counter !== index) {
                counter++;
                nodeAtIndex = nodeAtIndex.next;
            }
            // If index is in the second half of the list, start at the tail.
        } else {
            counter = this.length - 1;
            nodeAtIndex = this.tail;
            while (counter !== index) {

                counter--;
                nodeAtIndex = nodeAtIndex.previous;
            }

        }

        return nodeAtIndex;
    }

    /******************UPDATE METHOD**************************/

    updatetAt(index, value) {
        let nodeToUpdate = this.getAT(index);
        if (!nodeToUpdate)
            return false;
        nodeToUpdate.value = value;
        return true;

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
        const newNode = new Node(value, nodeAtThatIndex.previous, nodeAtThatIndex);
        nodeAtThatIndex.previous.next = newNode;
        nodeAtThatIndex.previous = newNode;
        this.length++;
        return true;

    }

    /******************REMOVEAT METHOD**************************/
    removeAt(index){
        // If index is out of bound return false
        if (index < 0 || index >= this.length)
            return false;
        // If removing at last   
        if (index === this.length-1)
            return this.pop();
        // If removing  at 0 index    
        if (index === 0)
            return this.shift();
        // If removing somewhere in between
        let nodeToRemove=this.getAt(index);
        nodeToRemove.previous.next=nodeToRemove.next;
        nodeToRemove.next.previous=nodeToRemove.previous;
        nodeToRemove.next=null;
        nodeToRemove.previous=null;
        this.length--;
        return nodeToRemove;


    }
     /******************FOREACH METHOD**************************/

     forEach(fn){
        let currentNode=this.head;
        let index=0;
        while(currentNode){
            fn(currentNode,index++);
            currentNode=currentNode.next;
        }
    }

    /******************ITERATOR  METHOD**************************/
    
    *[Symbol.iterator]() {
       
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }


    }
}