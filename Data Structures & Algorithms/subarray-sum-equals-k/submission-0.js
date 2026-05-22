class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let result = 0;
        let curSum = 0;
        let prefixSums = new Map();
        prefixSums.set(0, 1);

        for (let num of nums){
            curSum+=num;
            let diff = curSum - k;
            result += prefixSums.get(diff) || 0;
            
            const currentCount = prefixSums.get(curSum) || 0;
            prefixSums.set(curSum, currentCount + 1);
        }

        return result;
    }
}
