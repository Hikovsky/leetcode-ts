/**
 * 374. Guess Number Higher or Lower
 * Link to problem: https://leetcode.com/problems/guess-number-higher-or-lower/
 */

/**
 * Guess number function
 * @param n {number}
 * @return {number}
 */
function guessNumber(n: number): number {
    let sI = 0
    let eI = n + 1

    while(true) {
        let mI = Math.floor((sI + eI) / 2)
        let r = guess(mI)
        if (r === 0) return mI
        else if(r === 1) sI = mI
        else if(r === -1) eI = mI
    }
}

function guess(n: number) { return n }
