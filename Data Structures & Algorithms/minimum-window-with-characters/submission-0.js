class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length === 0) return '';

        let have = 0
        let want = t.length;

        let countT = {}
        let countWindow = {};

        let minLength = Infinity;
        let minIndexes = [-1, -1];

        for(let char of t){
            countT[char] = (countT[char] || 0) +1;
        }

        let left = 0;
        for(let right =0; right < s.length; right++){
            let char = s[right];
            countWindow[char] = (countWindow[char] || 0) + 1;

            if (countT[char] && countT[char]>=countWindow[char]){
                have++;
            }

            while (have === want){
                //fix length and indexes
                if(right - left + 1 < minLength){
                    minLength = Math.min(minLength, right - left + 1);
                    minIndexes = [left, right];
                }
                countWindow[s[left]]--;
                if(countT[s[left]] && countT[s[left]] > countWindow[s[left]]){
                    have--;
                }
                left++;
            }
        }
        if(minLength === Infinity){
            return '';
        } else {
            return s.slice(minIndexes[0], minIndexes[1] + 1);
        }
    }
}
