class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let largest = 0;
        let stack = [];//[index, height]

        for (let i =0; i < heights.length; i++){
            let start = i;
            while(stack.length > 0 && stack[stack.length -1][1] > heights[i]){
                let [index, height] = stack.pop();
                largest = Math.max(largest, height * (i - index));
                start=index;
            }

            stack.push([start, heights[i]]);
        }

        for (let i =0; i < stack.length; i++){
            let [index,height] = stack[i];
            largest = Math.max(largest, height * (heights.length - index));
        }
        return largest;
    }
}
