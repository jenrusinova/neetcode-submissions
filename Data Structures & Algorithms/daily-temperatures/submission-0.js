class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);
        let stack = [];

        for (let i =0; i < temperatures.length; i++){
            //stack = [[30, 0]]
        while (stack.length > 0 && temperatures[i] > stack[stack.length -1][0]) {
            //temperatures[i] = 38
            //i = 1
            let colderDay=stack[stack.length - 1];
            //colderDay = [30, 0];
            result[colderDay[1]] = i - colderDay[1];
            stack.pop();
        }   


        stack.push([temperatures[i], i]);
        }

        return result;
    }
}
