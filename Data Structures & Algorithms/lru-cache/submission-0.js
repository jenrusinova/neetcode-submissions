class Node {
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}


class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.left = new Node(0,0);
        this.right = new Node(0,0);
        this.left.next = this.right;
        this.right.previous = this.left;
    }

    insert(node){
        let previous = this.right.previous;
        previous.next = node;
        node.previous = previous;
        node.next = this.right;
        this.right.previous = node;
    }

    remove(node){
        let previous = node.previous;
        let next = node.next;
        previous.next = next;
        next.previous = previous;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)){
            let node = this.cache.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let newNode = new Node(key, value);
        if(this.cache.get(key)){
            this.remove(this.cache.get(key));
        }
        this.insert(newNode);
        this.cache.set(key, newNode);
        if(this.cache.size > this.capacity){
            let nodeToDelete = this.left.next;
            this.remove(nodeToDelete);
            this.cache.delete(nodeToDelete.key);
        }




    }
}
