/**
 * 238. Product of Array Except Self
 * Link to problem: https://leetcode.com/problems/product-of-array-except-self/
 */

export function productExceptSelf(nums: number[]): number[] {
    const lp: number[] = [1, ...nums]
    const rp: number[] = [...nums, 1]
    const result: number[] = []
    for (let i = 1; i < lp.length; i++) lp[i] = lp[i - 1] * lp[i]
    for (let i = rp.length - 2; i >= 0; i--) rp[i] = rp[i + 1] * rp[i]
    for (let i = 0; i < nums.length; i++) result[i] = lp[i] * rp[i + 1]
    return result
}
