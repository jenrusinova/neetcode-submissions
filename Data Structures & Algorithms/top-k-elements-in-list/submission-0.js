class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //create map {1: 1, 2:2, 3: 3}
        //create a freq array the indexes are frequences
        //[[1], [2], [3]]
        //return first k of this elements from the end

        const count = {};
        for (const num of nums) {
            count[num] = (count[num] ?? 0) + 1;
        }
        //count =  {1: 1, 2:2, 3: 3};
        let freq = Array.from({length: nums.length + 1}, () =>[]);
        //freq = [[],[],[]]

        for (const n of Object.keys(count)){
            const f = count[n];
            freq[f].push(n);
        }

        //freq = [[1], [2], [3]];

        const result = [];

        for (let i = freq.length - 1; i >=0; i--){
            const bucket = freq[i];
            for (const number of bucket){
                result.push(number);
            }
            if(result.length === k){
                return result;
            }
        }

    }
}
