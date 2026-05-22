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
     * @return {TreeNode}
     */
    invertTree(root) {
        let q = new Queue();
        q.push(root);

        while (q.size() > 0){
            let size = q.size();
            for (let i =0; i < size; i++){
                let node = q.pop();
                if(node !== null){
                    let temp = node.left;
                    node.left = node.right;
                    node.right = temp;
                    q.push(node.left);
                    q.push(node.right);
                }

            }
        }
        return root;
    }
}
