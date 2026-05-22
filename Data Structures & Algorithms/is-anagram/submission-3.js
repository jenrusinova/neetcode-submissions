class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let storage1 = {};

        for (let char of s){
            if (storage1[char] !== undefined){
                storage1[char]++;
            } else {
                storage1[char] = 1;
            } 
        }

        for (let char of t){
            if(storage1[char]){
                storage1[char]--;
            } else {
                return false;
            }
        }


        let values = Object.values(storage1);
        for (let num of values){
            if (num!== 0){
                return false;
            }
        }

        return true;


    }
}
