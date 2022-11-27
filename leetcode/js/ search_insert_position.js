/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  const hit = nums.indexOf(target);
  if (hit != -1) return hit;
  return [...nums, target].sort((a, b) => a - b).indexOf(target);
};