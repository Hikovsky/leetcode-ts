/**
 * 74. Search a 2D Matrix
 * Link to problem: https://leetcode.com/problems/search-a-2d-matrix/
 */

/**
 * Is number exist in two-dimensional array
 * @param matrix {Array<Array<number>>}
 * @param target {number}
 * @return {boolean}
 */

export function searchMatrix(matrix: number[][], target: number): boolean {
    for (let row of matrix) {
        if (search(row, target) !== -1) return true
    }
    return false
}

function search(nums: number[], target: number): number {
    let startIndex = 0
    let endIndex = nums.length

    while (true) {
        let index = Math.floor((startIndex + endIndex) / 2)
        if (nums[index] === target) return index
        else if (endIndex - startIndex <= 1) return -1
        else if (nums[index] > target) endIndex = index
        else if (nums[index] < target) startIndex = index
    }
}
