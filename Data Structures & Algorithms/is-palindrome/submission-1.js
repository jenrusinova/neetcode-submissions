class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let isChar = (char) => {
            if ((char >='a' && char <='z')||
                (char >='A' && char <='Z')||
                (char >='0' && char <= '9')){
                    return true;
                }
        return false;
        }

        let l = 0;
        let r = s.length - 1;
        while (l < r){
            if (!isChar(s[l])) l++;
            if (!isChar(s[r])) r--;

          if (isChar(s[l]) && isChar(s[r])){
            if (s[r].toLowerCase() === s[l].toLowerCase()){
                l++;
                r--;
            } else {
                return false;
            }
          }
        }

        return true;

    }
}
