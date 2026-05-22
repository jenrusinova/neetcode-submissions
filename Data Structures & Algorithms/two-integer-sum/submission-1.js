class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let storage = {};
        
         for (let i =0; i < nums.length; i++){
            let diff= target - nums[i]; //diff = 3, i = 1
            if (storage[diff] !== undefined){ //storage = {3: 0}
                return [storage[diff], i];
            } else {
                storage[nums[i]] = i;
            }

            }

         
    }
}
