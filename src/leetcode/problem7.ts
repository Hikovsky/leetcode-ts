/**
 * 7. Reverse Integer
 * Link to problem: https://leetcode.com/problems/reverse-integer/
 */

/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer
 * range [-231, 231 - 1], then return 0.
 * @param x {number} - 32-bit integer
 * @return {number}
 */
export function reverse(x: number): number {
    const max: number = 2147483647
    const min: number = -2147483648
    const negative = x < 0

    x = Math.abs(x)
    let result = 0
    while (x > 0) {
        const reminder = x % 10;
        result = result * 10 + reminder;
        x = Math.floor(x / 10);
    }

    if (negative) result *= -1

    if (result > max || result < min) return 0
    return  result
}
