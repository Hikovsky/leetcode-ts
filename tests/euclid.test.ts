import { describe, test, expect } from "@jest/globals"
import { euclid } from "../src/algorithms/euclid";

describe('Euclidean algorithm', () => {
    test('args=[2, 4] should return 2', () => {
        expect(euclid(2, 4)).toBe(2)
    })
    test('args=[140, 96] should return 4', () => {
        expect(euclid(140, 96)).toBe(4)
    })
    test('args=[4, 40] should return 4', () => {
        expect(euclid(4, 40)).toBe(4)
    })
    test('args=[10, 10] should return 10', () => {
        expect(euclid(10, 10)).toBe(10)
    })
    test('args=[5, 4] should return 1', () => {
        expect(euclid(5, 4)).toBe(1)
    })
})
