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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length === 0) return null;

        let minHeap = new MinPriorityQueue((node) => node.val);
        for (let list of lists){
            if (list!== null){
                minHeap.enqueue(list);
            }
        }

        let dummy = new ListNode();
        let current = dummy;

        while(minHeap.size() > 0){
            let node = minHeap.dequeue();
            current.next = node;

            //advance
            node = node.next;
            current = current.next;

            if(node !== null){
                minHeap.enqueue(node);
            }


        }
        return dummy.next;
    }
}
