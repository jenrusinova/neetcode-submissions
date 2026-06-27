class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        l = len(nums)
        ans = [0] * (2 * l)
        for i in range(len(nums)):
            ans[i] = ans[l+i] = nums[i]

        return ans