/**
 * Calculate factorial of given number
 * @param n {number}
 * @return {number}
 */
export function factorial(n: number): number {
    let result = 1
    if ([0, 1].includes(n)) return result
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result
}
