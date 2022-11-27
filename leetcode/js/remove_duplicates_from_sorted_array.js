/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    // 重複削除
    lists = nums.filter((ele, index, self) => self.indexOf(ele) === index);
    return lists.length;
};