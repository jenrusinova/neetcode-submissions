class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let storage = {};

        for (let word of strs){
            let key = new Array(26).fill(0);

            for (let char of word){
                let index = char.charCodeAt(0) - 97;
                key[index]++;
            }

             const serialized = key.join('#');
            if (storage[serialized] === undefined){
                storage[serialized] = [];
            }

              storage[serialized].push(word);
        }

        return Object.values(storage);

       
}
}
 