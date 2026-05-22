class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let storage = new Array(26).fill(0);

        for (let i =0; i < s.length; i++){
            storage[s.charCodeAt(i) - 97]++;
            storage[t.charCodeAt(i) - 97]--;
        }

        for (const s of storage){
            if (s !== 0){
                return false;
            }
        }

        return true;
    }
}
