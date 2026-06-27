class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        s = set([])
        for n in nums:
            if not n in s:
                s.add(n)
            else:
                return True
        return False