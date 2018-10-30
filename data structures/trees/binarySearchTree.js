class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;

    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }


    /* ***************************INSERT METHOD ***************************** */
    insert(value) {
        let newNode = new Node(value);
        // if there is no root set new node as root.
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;
        while (true) {
            // If trying to insert duplicate value , return undefined.
            if (value === currentNode.value)
                return undefined;
            // if value is less than current node , go to leftside of the tree.
            if (value < currentNode.value) {
                // If there is no left node , new node is inserted at the left of the current node and return the tree.
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                // If there is left node to the current node than that node becomes the current node.
                currentNode = currentNode.left;

                // if value is greater than current node , go to right side of the tree. 
            } else if (value > currentNode.value) {
                // If there is no right node , new node is inserted at the right of the current node and return the tree.
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                // If there is right node to the current node than that node becomes the current node.
                currentNode = currentNode.right;
            }

        }

    }

    /* ***************************CONTAINS METHOD ***************************** */

    contains(value) {
        // if tree is empty return false.
        if (!this.root)
            return false;
        let currentNode = this.root;
        while (true) {
            // cuurent node is equal to value , return true
            if (value === currentNode.value)
                return true;
            // if value is less than current node then go to left side of the tree.
            if (value < currentNode.value) {
                // if there is no left means tree does not contains that value ,  return false.
                if (!currentNode.left)
                    return false;
                //if there is left then make that node current node. 
                currentNode = currentNode.left;
                // if value is greater than current node then go to right side of the tree.   
            } else if (value > currentNode.value) {
                // if there is no right means tree does not contains that value ,  return false.
                if (!currentNode.right)
                    return false;
                //if there is right then make that node current node.    
                currentNode = currentNode.right;
            }
        }
    }
}