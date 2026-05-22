class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let storage = {};

        for (let num of nums){
            if (storage[num] === undefined){
                storage[num] = 1;
            } else {
                storage[num]++;
            }
        }
        console.log(storage);
        const freqArr = Object.values(storage);
        console.log(freqArr);
        let freq = new Array(nums.length + 1).fill(null).map(()=>[]);

        for (let s in storage){
            const f = storage[s];
            freq[f].push(Number(s));
        }

        let result = [];

        console.log(freq);
        for (let i = freq.length -1; i>=0; i--){
            if (freq[i].length > 0){
                for (let num of freq[i]){
                result.push(num);
                k--;
                 if (k === 0) return result;
                }
            }
        }

        return result;

    }
}
