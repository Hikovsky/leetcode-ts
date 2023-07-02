/**
 * 1. Two Sum
 * Link to problem: https://leetcode.com/problems/two-sum/
 */

/**
 * Function returns two index of elements, the sum of which is equal to the value of the target
 * @param nums {Array<number>}
 * @param target {number}
 * @return {Array<number>}
 */
export function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > target) continue
        for (let j = i + 1; j < nums.length; i++) {
            if (nums[j] > target) continue
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
    return []
}
