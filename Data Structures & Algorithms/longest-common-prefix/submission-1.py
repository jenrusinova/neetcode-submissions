class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # logic: longest common prefix is the shortest string. 
        # optimization: instead of dropping by one letter, we can drop by 1st bad letter
        # optimization2: we don't need to iterate all over, we know that previous were goods
        # optimization3: no need to take shortest, take the first.
        ans = strs[0]
        for string in strs:
            for i, c in enumerate(ans):
                if i == len(string) or string[i] != c:
                    ans = ans[:i]
                    break
        return ans