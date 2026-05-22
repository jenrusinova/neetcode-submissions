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
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) return true;

        let depth = (root) => {
            if(!root) return 0;

            return 1 + Math.max(depth(root.left), depth(root.right));
        }

        let leftDepth = depth(root.left);
        let rightDepth = depth(root.right);

        if (leftDepth - rightDepth < -1 || leftDepth - rightDepth > 1){
            return false;
        }

        return this.isBalanced(root.left)&&this.isBalanced(root.right);
    }
}
