class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        for (let word of strs){
            result += word.length + '*' + word;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
       // '5*Hello5*World'
       let result = [];
       let i = 0;
       while (i < str.length){
        let lengthStr = '';
        while (str[i] !== '*'){
            lengthStr += str[i];
            i++;
        }
        //now i at '*
        i++;
        let length = Number(lengthStr);
        let word = '';
        while (length > 0){
            word+=str[i];
            length--;
            i++;

        }
        result.push(word);
        word = '';
        }
       return result;
    }
}
