/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */



// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * 
    nums = [1,2,3,4], target = 5
    answer = [0, 3]

    - try not to use double for-loops 
    - if two numbers add to to a target number, subtracting either one of the two from the target will get you the other.
    - we need a way to contain the numbers and indices of each number we come across, ideally in constant lookup time.
    - a stack data structure would work well for this, but personally i lean towards objects.
    - an object with numbers as keys and indices as values

    target = 6, nums = [1,2,4,3,2,3]
    answer = [[1,2], [3,5]]
 */



var twoSum = function(nums, target) {
    let dictionary = {}
    for(let i = 0; i<nums.length; i++){
        let subtracted = target - nums[i]
        if(dictionary[subtracted]!=null){
            return [i, dictionary[subtracted]]
        }else{
            dictionary[nums[i]] = i
        }
    }
}

let nums = [2,7,11,15]
let target = 9

console.log(twoSum(nums, target))