/**
 * 2. Add Two Numbers
 * Link to problem: https://leetcode.com/problems/add-two-numbers/
 */

import {ListNode} from "../utils/linkedList";

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null{
    let currentSum: number = 0;
    let currentNode: ListNode | null = null;
    let result: ListNode | null = null;

    while (l1 || l2 || currentSum) {
        currentSum += l1 ? l1.val : 0;
        currentSum += l2 ? l2.val : 0;
        l1 = l1 && l1.next ? l1.next : null;
        l2 = l2 && l2.next ? l2.next : null;

        const temp = new ListNode(currentSum % 10);
        if (!currentNode) {
            currentNode = temp
            result = currentNode
            currentSum = Math.floor(currentSum / 10)
        } else {
            currentNode.next = temp
            currentSum = Math.floor(currentSum / 10)
            currentNode = currentNode.next
        }
    }
    return result;
}
