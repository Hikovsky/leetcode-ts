/**
 * 704. Binary Search
 * Link to problem: https://leetcode.com/problems/binary-search/
 */


/**
 * Find index of target number in numbers array
 * @param nums
 * @param target
 * @return number
 */
export function search(nums: number[], target: number): number {
    let startIndex = 0
    let endIndex = nums.length
    let count = 0
    const deadLine = Math.floor((startIndex + endIndex) / 2)

    while (true) {
        let index = Math.floor((startIndex + endIndex) / 2)
        if (nums[index] === target) return index
        else if (count >= deadLine || endIndex - startIndex <= 1) return -1
        else if (nums[index] > target) endIndex = index
        else if (nums[index] < target) startIndex = index
        count += 1
    }
}
