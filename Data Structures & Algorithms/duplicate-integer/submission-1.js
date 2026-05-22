class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let storage= {};

        for (let i =0; i < nums.length; i++){
            if (storage[nums[i]] === undefined){
                storage[nums[i]] = 'seen';
            } else {
                return true;
            }
        }

        return false;
    }
}
