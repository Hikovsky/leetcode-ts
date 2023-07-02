/**
 * Calculate the greatest common divisor for two
 * given positive integer numbers with
 * Euclidean Algorithm.
 * @param a {number} - Positive integer
 * @param b {number} - Positive integer
 * @return {number} - Return 1 if two given numbers a
 */
export function euclid(a: number, b: number): number {
    [a, b] = [Math.max(a, b), Math.min(a, b)]
    while (true) {
        const reminder = a % b
        if (reminder === 0) return b;
        [a, b] = [b, reminder]
    }
}
