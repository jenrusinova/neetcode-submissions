class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0; 
        const set = new Set(nums);

        for (const num of set){
            let previous = num - 1;
            if (!set.has(previous)){
                let length = 1;
                let next = num + 1;

                while (set.has(next)){
                    length++;
                    next++;
                }
                longest = Math.max(longest, length);
            }
        }

        return longest;

    }
}
