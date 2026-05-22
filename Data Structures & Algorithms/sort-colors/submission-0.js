class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let storage = {0 : 0, 1: 0, 2: 0};

        for (let num of nums){
            storage[num]++;
        }

        let values = Object.values(storage);
        let index = 0;
        let result = [];
        let value = 0;
        for (let i =0; i < 3; i++){
                 for(let j = 0; j < values[i]; j++){
                nums[index]=value;
                index++;
            }
            value++;
        }


    }
}
