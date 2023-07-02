/**
 * 20. Valid Parentheses
 * Link to problem: https://leetcode.com/problems/valid-parentheses/
 */

/**
 * Function returns true if parentheses in a given string are correct
 * @param str {string}
 * @return {boolean}
 */
export function isValid(str: string): any {
    if (str.length % 2 !== 0) return false
    const stack: string[] = []
    const closed = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ])
    const bracketsArray = str.split('')
    for (let i = 0; i < bracketsArray.length; i++) {
        let current = bracketsArray[i]
        const lastInStack = stack[stack.length - 1]
        if ('([{'.includes(current)) stack.push(current)
        else if (lastInStack && closed.get(lastInStack) === current) stack.pop()
        else return false
    }
    return stack.length === 0
}
