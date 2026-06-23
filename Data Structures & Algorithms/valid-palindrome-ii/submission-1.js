class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {

        let l =0;
        let r = s.length -1;


        const isPalindrome = (l, r, s) => {
            while (l < r){
                if (s[l] !== s[r]){
                    return false;
                } else {
                    l++;
                    r--;
                }
            }
            return true;
        }


        while (l < r) {
            if (s[l] !== s[r]){
                return isPalindrome (l+1, r, s) || isPalindrome (l, r-1, s);
            }
            l++;
            r--;
        }
        
        return true;
     
    }
}
