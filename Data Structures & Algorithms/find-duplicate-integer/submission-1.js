class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        if (nums.length === 0) return 0;
        let fast = 0;
        let slow = 0;

        while (true){
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow === fast) break;
        }

        fast = 0;
        while(true){
            slow = nums[slow];
            fast = nums[fast];
            if(slow === fast) return slow;
        }

    }
}
