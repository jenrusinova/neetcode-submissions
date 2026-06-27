class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        sN = self.numLetters(s)
        sT = self.numLetters(t)
        for key in sN:
            if not key in sN or not key in sT or sN[key] != sT[key]:
                return False
        print(sN)
        print(sT)
        return True
        
       
    def numLetters(self, s: str) -> Dict[str, int]:
        res = {}
        for l in s:
            res[l]=res.get(l, 0) + 1
        return res

