/**
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const objNums = {};

    for (let intNum of nums) {
        if (objNums.hasOwnProperty(intNum)) {
            return true;
        }

        objNums[intNum] = true;
    }

    return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([1, 3, 4, 2, 7]));
console.log(containsDuplicate([1]));