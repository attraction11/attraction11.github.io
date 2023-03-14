const isPalindrome = function (head) {
    const vals = [];
    while (head) {
        // 丢进数组里
        vals.push(head.val);
        head = head.next;
    }
    let start = 0,
        end = vals.length - 1; // 双指针
    while (start < end) {
        // 理应相同，如果不同，不是回文
        if (vals[start] != vals[end]) {
            return false;
        }
        start++;
        end--; // 双指针移动
    }
    return true; // 循环结束返回true，说明是回文
};
