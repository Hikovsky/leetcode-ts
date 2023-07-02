import { describe, test, expect } from "@jest/globals"
import { countSort } from "../src/algorithms/sort/countSort";

describe('Count sort', () => {
    test('array=[4, 2, 5, 1, 3] should return [1, 2, 3, 4, 5]', () => {
        const array: number[] = [4, 2, 5, 1, 3]
        const result: number[] = [1, 2, 3, 4, 5]
        expect(countSort(array)).toEqual(result)
    })
    test('array=[4, 2, 4, 1, 2] should return [1, 2, 2, 4, 4]', () => {
        const array: number[] = [4, 2, 4, 1, 2]
        const result: number[] = [1, 2, 2, 4, 4]
        expect(countSort(array)).toEqual(result)
    })
    test('array=[] should return []', () => {
        const array: number[] = []
        const result: number[] = []
        expect(countSort(array)).toEqual(result)
    })
    test('array=[1, 2, 3, 4, 5] should return [1, 2, 3, 4, 5]', () => {
        const array: number[] = [1, 2, 3, 4, 5]
        const result: number[] = [1, 2, 3, 4, 5]
        expect(countSort(array)).toEqual(result)
    })
});
