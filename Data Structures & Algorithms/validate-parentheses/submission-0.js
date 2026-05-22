class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        let closeToOpen = {
            ")":"(",
            "]":"[",
            "}":"{"
        }

        for (let char of s){
            if (char === "(" || char === "{" || char === "["){
                stack.push(char);
            } else {
                if (stack.length === 0){
                    return false;
                } 
                let lastElement = stack[stack.length - 1];
                if (closeToOpen[char] === lastElement){
                    stack.pop();
                } else {
                    return false;
                }
            
            }
        }

        return stack.length === 0;

    }
}
