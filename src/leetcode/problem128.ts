/**
 * 128. Longest Consecutive Sequence
 * Link to problem: https://leetcode.com/problems/longest-consecutive-sequence/description/
 */

import { countSort } from "../algorithms/sort/countSort";

export function longestConsecutive(nums: number[]): number {
    const set = new Set<number>(nums)
    let longest = 0

    for (const n of set.values()) {
        if (set.has(n - 1)) continue
        let seq = 0
        while (set.has(n + seq)) seq++
        longest = Math.max(longest, seq)
    }

    return longest
}
