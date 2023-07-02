/**
 * Sort array with 'count sort' algorithm.
 * @param array {number[]} - Array of numbers.
 * @return {number[]} - Returns sorted array of numbers.
 */
export function countSort(array: number[]): number[] {
    const frequency: number[] = Array(array.length + 1).fill(0)
    const sorted: number[] = []
    for (let item of array) frequency[item] += 1
    for (let i = 0; i < frequency.length; i++) {
        while (frequency[i] > 0) {
            sorted.push(i)
            frequency[i] -= 1
        }
    }
    return sorted
}
