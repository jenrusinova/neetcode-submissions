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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (!head) return null;
        let dummy = new ListNode (null, head);

        let length = 0;
        let current = head;
        while(current!== null){
            length++;
            current = current.next;
        }
        let nodeToDelete = null;
        let tail = null;

        current = dummy;
        while (current!== null){
            let diff = length - n ;
            length--;
            if(diff === 0){
                break;
            }
            current = current.next;
        }
        //current is node before deletion
        current.next = current.next.next;
        return dummy.next;


    }
}
