class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        const operators = new Set(["+", "-", "/", "*"]);
        for (const token of tokens){
            if (operators.has(token)){
                let a = stack.pop();
                let b = stack.pop();
                if (token === "+"){
                    stack.push(a + b);
                }else if (token === "-"){
                    stack.push(b-a);
                }else if (token === '*'){
                    stack.push(a*b);
                }else {
                    stack.push(Math.trunc(b/a));
                }

            } else {
                stack.push(parseInt(token));
            }
        }

        return stack.pop();


    }
}
