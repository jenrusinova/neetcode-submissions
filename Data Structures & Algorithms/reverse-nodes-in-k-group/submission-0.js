/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        if (!head) return null;
        if (head && k<=1) return head;

        //find rightBound
        let rightBound = null;
        let current = head;
        let count = 0;

        while(current!==null){
            count++;
            if(count === k){
                rightBound = current;
                break;
            }
            current = current.next;
        }
        if(count < k) return head;

            const after = rightBound.next;

        //reverse
        let previous = null;
        current = head;
        while(current!==after){
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        head.next = this.reverseKGroup(after, k);
       return previous;
    }
}
