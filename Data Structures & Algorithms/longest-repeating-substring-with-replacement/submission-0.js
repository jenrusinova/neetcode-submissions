class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let longest = 0;
        let maxFreq = 0;
        let count = {};

        for(let right=0; right< s.length; right++){
            if(count[s[right]] === undefined){
                count[s[right]] = 1;
            } else {
                count[s[right]]++;
            }
            maxFreq = Math.max(maxFreq, count[s[right]]);
            while (right-left+1 - maxFreq > k){
                count[s[left]]--;
                left++;
            }
            longest = Math.max(longest, right-left+1);



        }
        return longest;
    }
}
