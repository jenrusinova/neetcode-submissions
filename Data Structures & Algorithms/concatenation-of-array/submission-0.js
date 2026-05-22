class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let l = nums.length;
        let result = new Array(2*l);

        for(let i =0; i < l; i++){
            result[i] = nums[i];
            result [i + l] = nums[i];
        }
        return result;

    }
}
