/**
 * 206. Reverse Linked List
 * Link to problem: https://leetcode.com/problems/reverse-linked-list/
 */

import {ListNode} from "../utils/linkedList";

/**
 * Function returns new reversed LinkedList
 * @param head {ListNode}
 * @return {ListNode}
 */
export function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    let current = head

    while (current) {
        let temp = current.next
        current.next = prev
        prev = current
        current = temp
    }

    return prev
}
