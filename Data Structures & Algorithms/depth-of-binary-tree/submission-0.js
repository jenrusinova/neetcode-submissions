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
     * @return {number}
     */
    maxDepth(root) {
         return this.traverse(root, 0);

    }
    traverse(root, depth){
        if(!root) return depth;

        let currentDepth = depth + 1;
        
        return Math.max(this.traverse(root.left, currentDepth), this.traverse(root.right, currentDepth));
    }
}
