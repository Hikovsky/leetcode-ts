/**
 * 5. Longest Palindromic Substring
 * Link to problem: https://leetcode.com/problems/longest-palindromic-substring/
 */


/**
 * Search for the longest palindromic substring
 * @param s {string} - string where to search for palindrome
 * @return {string} - longest palindromic substring
 */

export function longestPalindrome(s: string): string {
    let maxPalindrome = '';
    for (let i = 0; i < s.length; i++) {
        // Check palindromes centered around i
        const palindrome1 = expandAroundCenter(s, i, i);
        if (palindrome1.length > maxPalindrome.length) {
            maxPalindrome = palindrome1;
        }

        // Check palindromes centered around i and i + 1
        const palindrome2 = expandAroundCenter(s, i, i + 1);
        if (palindrome2.length > maxPalindrome.length) {
            maxPalindrome = palindrome2;
        }
    }
    return maxPalindrome;
}

function expandAroundCenter(s: string, left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.slice(left + 1, right);
}

/*
    0.09270763397216797 milliseconds with slice()
    0.0080413818359375 milliseconds with slice()
    22.063666820526123 milliseconds with slice()
 */
