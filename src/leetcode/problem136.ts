/**
 * 136. Single Number
 * Link to problem: https://leetcode.com/problems/single-number/description/
 */

/**
 * Function returns the first single value from the array
 * @param nums {Array<number>}
 * @return {number}
 */
export function singleNumber(nums: number[]): number {
    return nums.reduce((acc, curr) => acc^curr, 0);
}
