class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length){
            return false;
        }

        let storage = {};
        for (let i =0; i < s.length; i++){
            let char = s[i];
            if(!storage[char]){
                storage[char] = 0;
            }
            storage[char]++;
        }

        for (let i =0; i < t.length; i++){
            let char = t[i];
            if(!storage[char]){
                return false;
            }
            storage[char]--;
        }
        return true;
    }
}
