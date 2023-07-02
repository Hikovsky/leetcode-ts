import { describe, test, expect } from "@jest/globals"
import { factorial } from "../src/algorithms/factorial";

describe('Factorial', () => {
    test('n=0 should return 1', () => {
        expect(factorial(0)).toBe(1)
    })
    test('n=1 should return 1', () => {
        expect(factorial(1)).toBe(1)
    })
    test('n=2 should return 2', () => {
        expect(factorial(2)).toBe(2)
    })
    test('n=6 should return 720', () => {
        expect(factorial(6)).toBe(720)
    })
    test('n=10 should return 3628800', () => {
        expect(factorial(10)).toBe(3628800)
    })
    test('n=14 should return 87178291200', () => {
        expect(factorial(14)).toBe(87178291200)
    })
})
