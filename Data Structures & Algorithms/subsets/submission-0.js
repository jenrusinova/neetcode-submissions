class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
          let result = [];
          let subset = [];
          let dfs = (nums, i, result, subset) => {
            if (i >= nums.length){
                result.push([...subset]);
                return;
            }
            subset.push(nums[i]);
            dfs(nums, i + 1, result, subset);
            subset.pop();
           dfs(nums, i+1, result, subset);
          }
          dfs(nums, 0, result, subset);
          return result;

    }
}
