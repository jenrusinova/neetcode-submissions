class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        def convertStringToLetterCodes(s: str) -> str:
            ans = [0] * 26
            shift = ord("a")
            for letter in list(s):
                ans[ord(letter) - shift] += 1
            return (" ".join(map(lambda x: str(x), ans)))
        res = {}
        for s in strs:
            c = convertStringToLetterCodes(s)
            if c in res:
                res[c] += [s]
            else:
                res[c] = [s]
        return list(res.values())