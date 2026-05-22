class MyHashSet {
    constructor() {
        this.set = Array.from({length:10000}, ()=> new ListNode());
    }

    hash(key){
        return key % this.set.length;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let current = this.set[this.hash(key)];
        while(current.next){
            if (current.next.key === key){
                return;
            }
            current = current.next;
        }
        current.next = new ListNode(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let current = this.set[this.hash(key)];
        while (current.next){
            if (current.next.key === key){
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let current = this.set[this.hash(key)];
        while (current.next){
            if (current.next.key === key){
                return true;
            }
            current = current.next;
        }
        return false;

    }
}

class ListNode {
   constructor(key){
    this.key = key;
    this.next = null;
   }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
