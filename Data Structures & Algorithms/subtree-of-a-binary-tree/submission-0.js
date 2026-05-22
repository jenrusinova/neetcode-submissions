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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let isSameTree = (rootA, rootB) => {
            if (!rootA && !rootB) return true;

            if (!rootA || !rootB) return false;

            if (rootA.val !== rootB.val) return false;

            let left = isSameTree(rootA.left, rootB.left);
            let right = isSameTree(rootA.right, rootB.right);

            return left && right;
        }
        if (!root && !subRoot) return true;
        if (!subRoot) return true;
        if (!root) return false;

        if (isSameTree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);

                

        
    }
}
