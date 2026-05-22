class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let storage = {};

        for (let word of strs){
            let serialized = new Array(26).fill(0);
            for (let char of word){
                let index = char.charCodeAt(0) - 97;
                serialized[index]++;
            }
            let key = serialized.join('*');
            if (!storage[key]){
                storage[key] = [word];

            } else {
                storage[key].push(word);
            }
        }

        return Object.values(storage);
    }
}
