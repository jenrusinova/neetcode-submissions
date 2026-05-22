/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        let oldToNew = new Map();

        let dfs = (oldToNew, node) => {
            if (node === null){
                return null;
            }

            if(oldToNew.has(node)){
                return oldToNew.get(node);
            }

            let copy = new Node(node.val, []);


            oldToNew.set(node, copy);

            for (let n of node.neighbors){
                copy.neighbors.push(dfs(oldToNew, n));
            }
            return copy;
        }

        return dfs(oldToNew, node);
    }
}
