/**
 * Fast exponentiation 'n' integer number of positive integer number 'x'
 * @param n {number} - number to power
 * @param x {number} - power
 * @return {number}
 */
export function fastExponentiation(n: number, x: number): number {
    let result = 1
    let multiplier = n
    while (x !== 0) {
        const reminder = x % 2
        if (reminder !== 0) result *= multiplier
        x = Math.floor(x / 2)
        multiplier *= multiplier
    }
    return result
}
