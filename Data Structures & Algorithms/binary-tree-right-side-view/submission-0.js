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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return 0;
        let result = [];

        let depth = 0;

        const dfs = (node, depth) => {
            if (!node) return 0;

            if (depth === result.length){
                result.push(node.val);
            }

            dfs (node.right, depth + 1);
            dfs (node.left, depth +1);
        }

        dfs (root, 0);
        return result;
    }
}
