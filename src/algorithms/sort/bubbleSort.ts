/**
 * Sort array with 'bubble sort' algorithm.
 * @param array {number[]} - Array of numbers.
 */
export function bubbleSort(array: number[]): void {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) [array[j], array[j + 1]] = [array[j + 1], array[j]]
        }
    }
}
