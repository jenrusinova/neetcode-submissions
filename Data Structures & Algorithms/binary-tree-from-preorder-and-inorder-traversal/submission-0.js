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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let map = new Map();

        for (let i =0; i < inorder.length; i++){
            map.set(inorder[i], i);
        }

        let preorderIndex = 0;

        const dfs = (left, right) => {
            if (left > right) return null;

            const rootVal = preorder[preorderIndex];
            preorderIndex++;
            const root = new TreeNode(rootVal);
            const midIndex = map.get(rootVal);
            root.left = dfs(left, midIndex - 1);
            root.right = dfs(midIndex + 1, right);

            return root;
        }

        return dfs (0, inorder.length -1);

    }
}
