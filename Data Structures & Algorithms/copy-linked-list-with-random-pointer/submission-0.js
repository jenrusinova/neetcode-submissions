// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(head === null)return null;
        let oldToNew = new Map();
        oldToNew.set(null, null);

        let current = head;

        while(current){
            oldToNew.set(current, new Node(current.val));
            current = current.next;
        }

        current = head;
        while(current){
            let copy = oldToNew.get(current);
            copy.next = oldToNew.get(current.next);
            copy.random = oldToNew.get(current.random);
            current = current.next;
        }

        return oldToNew.get(head);
    }
}
