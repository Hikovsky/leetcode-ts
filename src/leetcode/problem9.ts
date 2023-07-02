/**
 * 9. Palindrome Number
 * Link to problem: https://leetcode.com/problems/palindrome-number/description/
 */

/**
 * Function returns true if given number is palindrome
 * @param x {number}
 * @return {boolean}
 */
export function isPalindrome(x: number): boolean {
    const original = x
    let reversed = 0
    while (x > 0) {
        const reminder = x % 10;
        reversed = reversed*10 + reminder;
        x = Math.floor(x / 10);
    }
    return original === reversed
}
