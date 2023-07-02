import { describe, test, expect } from "@jest/globals"
import { fastExponentiation } from "../src/algorithms/fastExponentiation";

describe('Fast exponentiation', () => {
    test('0^0 should return 1', () => {
        expect(fastExponentiation(0, 0)).toBe(1)
    })
    test('2^0 should return 1', () => {
        expect(fastExponentiation(2, 0)).toBe(1)
    })
    test('2^1 should return 2', () => {
        expect(fastExponentiation(2, 1)).toBe(2)
    })
    test('2^2 should return 4', () => {
        expect(fastExponentiation(2, 2)).toBe(4)
    })
    test('5^4 should return 625', () => {
        expect(fastExponentiation(5, 4)).toBe(625)
    })
})
