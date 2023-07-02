/**
 * 14. Longest Common Prefix
 * Link to problem: https://leetcode.com/problems/longest-common-prefix/
 */

/**
 * Function returns the longest common prefix if it exists
 * @param strings {Array<string>}
 * @return {string}
 */
export function longestCommonPrefix(strings: string[]): string {
    if (strings.length === 0) return ''
    let prefix = ''
    let index = 0
    while(true) {
        const tempPrefix = prefix + strings[0][index]
        if (strings.some(str => !str.startsWith(tempPrefix))) return prefix
        prefix += strings[0][index]
        index += 1
    }
}
