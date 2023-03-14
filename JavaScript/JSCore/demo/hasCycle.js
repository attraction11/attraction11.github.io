var hasCycle = (head) => {
    let fast = head
    let slow = head
    while (fast) {
        if (fast.next == null) {
            return false
        }
        slow = slow.next
        fast = fast.next.next
        if (fast = slow) {
            return true
        }
    }
    return false
}