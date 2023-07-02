/**
 * 153. Find Minimum in Rotated Sorted Array
 * Link to problem: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */

/**
 * Return minimum value from array of numbers
 * @param nums {Array<number>}
 * @return {number}
 */
export function findMin(nums: number[]): number {
    let startIndex = 0, stopIndex = nums.length - 1;

    while (startIndex < stopIndex) {
        let mid = Math.floor((startIndex + stopIndex) / 2)
        if (mid > 0 && nums[mid - 1] > nums[mid]) return nums[mid];
        else if (nums[mid] >= nums[startIndex] && nums[mid] < nums[stopIndex]) stopIndex = mid - 1;
        else if (nums[mid] >= nums[startIndex] && nums[mid] > nums[stopIndex]) startIndex = mid + 1;
        else if (nums[mid] < nums[startIndex] && nums[mid] < nums[stopIndex]) stopIndex = mid - 1;
    }

    return nums[startIndex];
}
