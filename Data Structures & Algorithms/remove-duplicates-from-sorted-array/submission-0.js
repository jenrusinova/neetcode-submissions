class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 1;
        
        for (let i = 1; i < nums.length; i++){
            if (nums[i-1] != nums[i]){
                nums[l] = nums[i];
                l++;
            }
        }
        return l;
    }
}
