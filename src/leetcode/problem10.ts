/**
 * 10. Regular Expression Matching
 * Link to problem: https://leetcode.com/problems/regular-expression-matching/
 */

/**
 * Checks if string matches given pattern (regular expression)
 * @param string {string} - string to check
 * @param pattern {string} - pattern (regular expression)
 * @return {boolean}
 */
export function isMatch(string: string, pattern: string): boolean {
    const array: boolean[][] = Array(string.length + 1).fill(false)
        .map(() => Array(pattern.length + 1).fill(false))
    array[0][0] = true

    for (let j = 1; j <= pattern.length; j++) {
        if (pattern[j - 1] === '*' && array[0][j - 2]) array[0][j] = true
    }

    for (let i = 1; i <= string.length; i++) {
        for (let j = 1; j <= pattern.length; j++) {
            if (pattern[j - 1] === '.' || pattern[j - 1] === string[i - 1]) {
                array[i][j] = array[i - 1][j - 1]
            }
            else if (pattern[j - 1] === '*') {
                array[i][j] = array[i][j - 2]
                if (string[i - 1] === pattern[j - 2] || pattern[j - 2] === '.') {
                    array[i][j] = array[i][j] || array[i - 1][j];
                }
            }
        }
    }

    return array[string.length][pattern.length]
}

/*
string="aab" pattern="c*a*b"

    _   c   *   a   *   b

_   T   F   T   F   T   F

a   F   F   F   T   T   F

a   F   F   F   F   T   F

b   F   F   F   F   F   T

 */
