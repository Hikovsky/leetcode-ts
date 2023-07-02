/**
 * 13. Roman to Integer
 * Link to problem: https://leetcode.com/problems/roman-to-integer/description/
 */


/**
 * Function returns a Roman numeral represented by an Arabic numeral.
 * @param s {string} - Roman number
 * @return {number}
 */
export function romanToInt(s: string): number {
    const collection = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ])
    let result = 0
    for (let i = 0; i < s.length; i++) {
        const current = collection.get(s[i])
        const next = collection.get(s[i+1])
        if (current && next) {
            if (current < next) {
                result += next - current
                i++
            } else {
                result += current
            }
        } else if (current && !next) {
            result += current
        }
    }
    return result
}
