/**
 * 141. Linked List Cycle
 * Link to problem: https://leetcode.com/problems/linked-list-cycle/
 */

import {ListNode} from "../utils/linkedList";

export function hasCycle(head: ListNode | null): boolean {
    let firstPointer = head
    let lastPointer = head

    while (lastPointer) {
        // @ts-ignore
        firstPointer = firstPointer.next
        // @ts-ignore
        lastPointer = lastPointer.next?.next

        if (firstPointer && lastPointer && firstPointer === lastPointer) return true
    }
    return false
};
