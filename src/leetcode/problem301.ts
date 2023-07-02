/**
 * 301. Remove Invalid Parentheses
 * Link to problem: https://leetcode.com/problems/remove-invalid-parentheses/
 */

/**
 * Function takes invalid string of parentheses and returns correct one
 * @param str {string} - Invalid string of parentheses
 * @return {string[]} - Array of correct strings with parentheses
 */
export function removeInvalidParentheses(str: string) {
    if (str.indexOf('(') < 0 || str.indexOf(')') < 0) return ['']
    else if (str.indexOf(')') < str.indexOf('(')) return ['']

    const stack: Array<{value: string, index: number}> = []
    const result: string[] = []
    const invalid: number[] = []
    const toRemove: number[] = []

    const array = str.split('')
    for (let i = 0; i < array.length; i++) {
        const current = array[i]
        const lastInStack = stack[stack.length - 1]

        if (current === '(') stack.push({value: current, index: i})
        else if (lastInStack && current === ')') stack.pop()
        else if (!lastInStack && current === ')') invalid.push(i)
    }

    for (let i of invalid) {
        const temp = array.slice(0, i).lastIndexOf('(')
        const alternateIndex = array.slice(0, temp).lastIndexOf(')')
        if (alternateIndex) toRemove.push(alternateIndex)
        toRemove.push(i)
    }

    for (let i of toRemove) {
        const copy = [...array]
        copy[i] = ''
        result.push(copy.join(''))
    }

    return result
}
