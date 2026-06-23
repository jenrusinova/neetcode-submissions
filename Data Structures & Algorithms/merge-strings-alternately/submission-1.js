class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let f = 0;
        let s = 0;

        let result = "";

        while (f < word1.length  && s < word2.length){
            result +=word1[f];
            result+=word2[s];
            f++;
            s++;
        }

        if (f < word1.length) {
            result+=word1.slice(f);
        }else {
            result+=word2.slice(s);
        }

        return result;
    }
}
