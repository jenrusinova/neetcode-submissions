class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
  groupAnagrams(words) {
  const storage = new Map();

  for (let word of words){
    const count = new Array(26).fill(0);
     for (let char of word){
      count[char.charCodeAt(0) - 97]++;
     }

    const serialised = count.join();

      if (!storage.get(serialised)){
        storage.set(serialised, [])
      }
      storage.get(serialised).push(word);

  }

 return Array.from(storage.values());
}
}
