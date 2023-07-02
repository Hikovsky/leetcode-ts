/**
 * 23. Merge k Sorted Lists
 * Link to problem: https://leetcode.com/problems/merge-k-sorted-lists/
 */
import {ListNode} from "../utils/linkedList";

function arrayToList(array: number[]): ListNode {
    let head = new ListNode(array[0])

    let current = head
    for (let i = 1; i < array.length; i++) {
        current.next = new ListNode(array[i])
        current = current.next
    }

    return head
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let array = []

    for (let list of lists) {
        while(list) {
            array.push(list.val)
            list = list.next
        }
    }

    if (!array.length) return null

    array = array.sort((a,b) => a - b)

    return arrayToList(array)
}
