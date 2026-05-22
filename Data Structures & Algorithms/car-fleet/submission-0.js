class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = [];
        for (let i =0; i < position.length; i++){
            cars.push([position[i], speed[i]]);
        };

        //sort by position in decreasing order
        cars.sort((a, b) => b[0] - a[0]);
        let stack = [];

        for (let i =0; i < cars.length; i++){
            let timeToTarget = (target - cars[i][0])/cars[i][1];
            stack.push(timeToTarget);
            if(stack.length >=2 && stack[stack.length -2] >= stack[stack.length -1]){
                stack.pop();
            }
        }
        return stack.length;
        

    }
}
