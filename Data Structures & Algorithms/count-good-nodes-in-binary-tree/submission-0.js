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
    goodNodes(root, maxSoFar) {
        let count = 0;
        let traverse = (root, maxSoFar) => {
        
            if (!root) return 0;
           

            if (root.val >= maxSoFar){
                count++;
            }          
              maxSoFar = Math.max(maxSoFar, root.val);


            traverse(root.left, maxSoFar);
            traverse(root.right, maxSoFar);
            
        }
        traverse(root, -Infinity);
        return count;
    }
}
