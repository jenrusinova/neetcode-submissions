class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let storage = {};

        for (let i=0; i < nums.length; i++){
            if(storage[nums[i]]!==undefined){
                let distance = i - storage[nums[i]];
                if (distance <=k){
                    return true;
                }
            }
            storage[nums[i]] = i;
        }
        return false;
    }
}
