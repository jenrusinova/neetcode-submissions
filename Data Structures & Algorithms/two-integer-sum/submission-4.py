class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        res = {}
        for i, n in enumerate(nums):
            if n in res:
                return [res[n], i]
            else:
                res[target-n] = i
        return []