/**
 * 33. Search in Rotated Sorted Array
 * Link to problem: https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 */

/**
 * Find index of target in array
 * @param nums {Array<number>}
 * @param target {number}
 * @return {number}
 */
export function search(nums: number[], target: number): number {
    let startIndex = 0, stopIndex = nums.length - 1
    while (startIndex <= stopIndex) {
        const index = Math.floor((startIndex + stopIndex) / 2)
        if (nums[index] === target) return index
        if (nums[startIndex] <= nums[index]) {
            if (nums[index] < target || nums[startIndex] > target) startIndex = index + 1
            else stopIndex = index - 1
        } else {
            if (nums[index] > target || nums[stopIndex] < target) stopIndex = index - 1
            else startIndex = index + 1
        }
    }
    return  -1
}
