/**
 * 983. Minimum Cost For Tickets
 * Link to problem: https://leetcode.com/problems/minimum-cost-for-tickets/
 */

export function minCostTickets(days: number[], costs: number[]): number {
    const maximum: number = Math.max(...days) + 1
    const array: number[] = Array(maximum).fill(0)

    for (let i: number = 1; i < array.length; i++) {
        if (!days.includes(i)) array[i] = array[i - 1]
        else {
            const day: number = array[Math.max(i - 1, 0)] + costs[0]
            const week: number = array[Math.max(i - 7, 0)] + costs[1]
            const month: number = array[Math.max(i - 30, 0)] + costs[2]
            array[i] = Math.min(day, Math.min(week, month))
        }
    }

    return array[array.length - 1]
}
