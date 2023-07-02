/**
 * 347. Top K Frequent Elements
 * Link to problem: https://leetcode.com/problems/top-k-frequent-elements/
 */

export function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map()
    for (let num of nums) map.set(num, (map.get(num) || 0) + 1)
    return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(item => item[0])
        .slice(0, k)
}
