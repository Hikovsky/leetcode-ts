/**
 * Sort array with 'count sort' algorithm.
 * @param array {number[]} - Array of numbers.
 * @return {number[]} - Returns sorted array of numbers.
 */
export function countSort(array: number[]): number[] {
    if (!array.length) return []
    let min = Math.min(...array);
    let max = Math.max(...array);
    let count = new Array(max - min + 1).fill(0);
    for (let num of array) {
        count[num - min]++;
    }
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    let sorted = new Array(array.length);
    for (let i = array.length - 1; i >= 0; i--) {
        sorted[count[array[i] - min] - 1] = array[i];
        count[array[i] - min]--;
    }
    return sorted;
}
