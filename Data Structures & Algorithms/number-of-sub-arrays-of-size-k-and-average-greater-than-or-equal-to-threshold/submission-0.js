class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let result = 0;
        let currentSum = 0;


        for (let i =0; i < arr.length; i++){
            currentSum+=arr[i];
            if(i >= k - 1){ //[11, 13,17]
                let average = currentSum/k
                if(average >= threshold){
                    result++;
                }
                currentSum = currentSum - arr[i - k + 1]
            }
        }

        return result;
    }
}
