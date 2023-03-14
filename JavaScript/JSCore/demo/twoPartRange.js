const searchRange = function (nums, target) {
    const len = nums.length;
    if (len == 0) {
        return [-1, -1];
    }

    const findTarget = function (nums, target, getFirst) {
        let left = 0,
            right = len - 1;
        while (left < right) {
            // 中间值向下取整，考虑到大数溢出的情况 采用位运算，而不用除法
            const mid = getFirst
                ? (left + right) >> 1
                : (left + right + 1) >> 1;
            const num = nums[mid];
            if (num == target) {
                if (getFirst) {
                    // 说明中间位置右边，一定不是目标元素出现的第一次
                    // [left, mid]
                    right = mid;
                } else {
                    // 说明中间位置左边，一定不是目标元素出现的最后一次
                    // [mid, right]
                    left = mid;
                }
            } else if (num < target) {
                // [mid + 1, right]
                left = mid + 1;
            } else {
                // [left, mid -1]
                right = mid - 1;
            }
        }

        if (getFirst) {
            // 循环结束后一定存在left == right,此时判断是否找到首个目标元素
            if (nums[left] == target) {
                return left;
            }
            // 不存在返回 -1
            return -1;
        } else {
            return left;
        }
    };

    const first = findTarget(nums, target, true);
    if (first == -1) {
        return [-1, -1];
    }

    const last = findTarget(nums, target, false);
    return [first, last];
};


