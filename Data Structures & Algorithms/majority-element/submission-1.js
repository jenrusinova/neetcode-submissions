class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let storage = {};
        let count = Math.floor(nums.length/2) + 1;
        console.log(count);

        for (let num of nums){
            if (storage[num] === undefined){
                storage[num] = 1;
            }
            else {
                storage[num]++;
            }
            if(storage[num] >= count){
                return num;
            }
        }
    }
}
