class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans = {}
        for s in strs:
            ss = "".join(sorted(s))
            if ss in ans:
                ans[ss] += [s]
            else:
                ans[ss] = [s]

        return [ ans[x] for x in ans ]