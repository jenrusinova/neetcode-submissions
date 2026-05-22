class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.mergeSort(nums, 0, nums.length-1);
        return nums;
    }

    mergeSort(array, left, right){
        if (left >= right) return;
        let mid = Math.floor((right+left)/2);
        this.mergeSort(array, left, mid);
        this.mergeSort(array, mid+1, right);
        this.merge(array, left, mid, right);
    }

    merge(array, left, mid, right){
        let temp = [];
        let i = left;
        let j = mid + 1;
        while (i <= mid && j <= right){
            if (array[i] < array[j]){
                temp.push(array[i]);
                i++;
            } else {
                temp.push(array[j]);
                j++;
            }
        }

        //leftovers
        while (i <= mid){
            temp.push(array[i]);
            i++;
        }

        while (j <= right){
            temp.push(array[j]);
            j++;
        }

        for (let k =0; k < temp.length; k++){
            array[left + k] = temp[k];
        }
    }
}
