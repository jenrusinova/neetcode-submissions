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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let result = [];

        let traverse = (root) => {
            if (!root){
                result.push('N');
                return;
            }
            result.push(root.val.toString());
            traverse(root.left);
            traverse(root.right);
        }
        traverse(root);
        return result.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let arr = data.split(',');
        let index = 0;

        let traverse = () =>{
            if(arr[index] === 'N'){
                index++;
                return null;
            }
            let root = new TreeNode(Number(arr[index]));
            index++;
            root.left = traverse();
            root.right = traverse();

            return root;
        }

        return traverse();
    }
}
