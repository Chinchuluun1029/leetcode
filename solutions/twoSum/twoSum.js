/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i in nums) {
        let comp = target - nums[i];
        if (map.has(comp))
            return [map.get(comp), i];
        map.set(nums[i], i);
    }
};