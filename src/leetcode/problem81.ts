/**
 * 81. Search in Rotated Sorted Array II
 * Link to problem: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 */

export function search(nums: number[], target: number): boolean {
    let startIndex = 0, stopIndex = nums.length-1
    while(startIndex <= stopIndex){
        let middleIndex = startIndex + Math.floor((stopIndex - startIndex) / 2)
        if(nums[middleIndex] == target) return true
        if(nums[middleIndex] > nums[startIndex]){
            if(nums[middleIndex] > target && nums[startIndex] <= target)    stopIndex = middleIndex - 1
            else    startIndex = middleIndex + 1
        } else if(nums[middleIndex] < nums[startIndex]){
            if(nums[middleIndex] < target && nums[startIndex] > target)  startIndex = middleIndex + 1
            else    stopIndex = middleIndex - 1
        } else{
            startIndex++
        }
    }
    return false
}
