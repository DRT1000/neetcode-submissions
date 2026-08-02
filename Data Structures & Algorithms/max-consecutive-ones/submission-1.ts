class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let count = 0;
        let temp = 0;

        for (let n of nums) {
            if (n === 1) {
                temp++;
                if (temp > count) {
                    count = temp;
                }
            } else {
                temp = 0;
            }
        }

        return count;
    }
}
