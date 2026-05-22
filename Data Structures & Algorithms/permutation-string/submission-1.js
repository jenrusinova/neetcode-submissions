class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let s1count = new Array(26).fill(0);
        let s2count = new Array(26).fill(0);

        for(let i =0; i < s1.length; i++){
            s1count[s1.charCodeAt(i)-97]++;
            s2count[s2.charCodeAt(i)-97]++;
        }

        let matches = 0;
        for(let i =0; i < 26; i++){
            if(s1count[i] === s2count[i]){
                matches++;
            }
        }

        let left = 0;
        for(let right = s1.length; right < s2.length; right++){
            if(matches === 26) return true;

            let index = s2.charCodeAt(right)-97;
            s2count[index]++;
            if(s1count[index] === s2count[index]){
                matches++;
            }else if (s1count[index]+1 === s2count[index]){
                matches--;
            }

            index = s2.charCodeAt(left)-97;
            s2count[index]--;
            if(s1count[index] === s2count[index]){
                matches++;
            } else if(s1count[index]-1 === s2count[index]){
                matches--;
            }
            left++;


        }
        return matches === 26;
    }
}
