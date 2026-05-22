class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let storage = {};
        let result = [];
        for (let num of nums){
            if (storage[num] !== undefined){
                storage[num]++;
            } else {
                storage[num] = 1;
            }
        }

        let freqArr = new Array(nums.length +1).fill(0).map(()=> []);
       
         for (let num in storage){
            let freq = storage[num];
            freqArr[freq].push(Number(num));
          
         }

         console.log(freqArr);
         for (let i =freqArr.length -1; i >=0; i--){
            if (freqArr[i].length > 0){
                for (let num of freqArr[i]){
                    result.push(num);
                    k--;
                    if (k === 0){
                        return result;
                    }
                }
            }
         }

         return result;
    }
}
