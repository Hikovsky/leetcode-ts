/**
 * Sort array with 'insert sort' algorithm.
 * @param array {number[]} - Array of numbers.
 */
export function insertSort(array: number[]): void {
    for (let i = 1; i < array.length; i++) {
        let j = i
        while (j > 0 && array[j - 1] > array[j]) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]]
            j -= 1
        }
    }
}
