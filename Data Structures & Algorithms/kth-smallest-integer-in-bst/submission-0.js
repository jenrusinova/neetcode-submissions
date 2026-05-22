/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let arr = [];
        let traverse =  (root) => {
            if(!root) return;
            traverse(root.left);
            arr.push(root.val);
            traverse(root.right);
        }
        traverse(root);
        return arr[k-1];
    }
}
