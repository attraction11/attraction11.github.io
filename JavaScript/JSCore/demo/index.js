const searchRange = function (nums, target) {
    const len = nums.length
    if (len == 0) {
        return [-1, -1]
    }

    const findTarget = function (nums, target, getFirst) {
        let left = 0, right = len - 1;
        while (left < right) {
            const mid = getFirst ? (right + left) >> 1 : (right + left + 1) >> 1
            const num = nums[mid]
            if (target == num) {
                if (getFirst) {
                    // [left, mid]
                    right = mid
                } else {
                    // [mid, right]
                    left = mid
                }
            } else if (target < num) {
                // [left, mid - 1]
                right = mid - 1
            } else {
                // [mid + 1, right]
                left = mid + 1
            }
        }

        if (getFirst) {
            if (nums[left] == target) {
                return left
            }
            return -1
        } else {
            return left
        }
    }

    const first = findTarget(nums, target, true)
    if (first == -1) {
        return [-1, -1]
    }
    const last = findTarget(nums, target, false)
    return [first, last]
}