class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        for(let i =0; i < strs[0].length; i++){
            for(let j =0; j < strs.length; j++){
                if(i === strs[0].length || strs[0][i] !== strs[j][i]){
                    return strs[0].slice(0, i);
                }
            }
        }
        return strs[0];
    }
}
