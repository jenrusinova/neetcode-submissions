class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const result = [];
        //'5#Hello5#World';
        for (let i =0; i< strs.length; i++){
            let word = strs[i];
           let encoded = word.length + "#" + word;
           result.push(encoded);
        }
        return result.join('');

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //'5#Hello5#World';
        let i = 0;
        let j =0;
        const result = [];
        while (i < str.length){
            while (str[j]!== '#'){
                j++;
            }
            let length = Number(str.slice(i,j));
            let startIndex = j + 1;
            let endIndex = j + length + 1;
            let word = str.slice(startIndex, endIndex);
             result.push(word);
            j = endIndex;
            i = endIndex;
        }
        return result;
    }
}
