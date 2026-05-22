class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxDiff = 0;
        let diff = 0;

        let left = 0;

        for (let right = 0; right < prices.length; right++){
            diff = prices[right] - prices[left];
            if (diff > 0) {
                maxDiff = Math.max(diff, maxDiff);
            }else {
                left = right;
            }
        }
        return maxDiff;
    }
}
