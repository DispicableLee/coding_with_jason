// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// ----- Extension -------
// You must write an algorithm that runs in O(n) time and without using the division operation.

/**
 * Example 1:
    Input: nums = [1,2,3,4]
    Output: [24,12,8,6]

 * Example 2:
    Input: nums = [-1,1,0,-3,3]
    Output: [0,0,9,0,0]

    Constraints:
    2 <= nums.length <= 105
    -30 <= nums[i] <= 30
    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */

// input : [1, 0,1]
// output: [0, 0, 0]

// [1,2,3,4]
// [24, 12, 8, 6]



// [1,2,3,4,5]


// To get the answer per index
// Multiply all of the numbers leading up to the line
// And all the numbers after the line
// The line is at the index itself

// [  \ 2 * 3 * 4 * 5,
//  1 *  \  3 * 4 * 5,
//  1 * 2 *  \  4 * 5,
//  1 * 2 * 3 *  \  5,
//  1 * 2 * 3 * 4  \  ]



// nums: [1,2,3,4,5]

// expectedAns: [ 1, 1, 2, 6, 24 ]
// actualAns:         [ 2, 6, 24 ]

var productExceptSelf = function(nums) {
    // Implement an array partial_product, such that partial_product[i] is the product of the numbers before the "line"
    let initialProduct = 1
    let returned = []
    for(let i = 1; i< nums.length - 1; i++){
        initialProduct = initialProduct * nums[i]
        returned.push(initialProduct)
    }   
    console.log(returned)
    return returned
}




var productExceptSelf = function(nums) {
    let returned = []
    let totalSum = nums.reduce((acc, el)=> acc * el, 1)
    for(let i = 0; i< nums.length; i++){
        console.log(nums[i])
        if(!(nums[i]===0)){
            returned.push(totalSum/nums[i])
        }else{
            // Before totalSum gets calculated, we need to exclude the 0
            let numsCopy = []
            for(let j = 0; j<nums.length; j++){
                if(j!=i){ 
                    numsCopy.push(nums[j])
                }else{
                    numsCopy.push(1)
                }
            }
            let totalSum = numsCopy.reduce((acc, el)=> acc * el, 1)
            returned.push(totalSum)
        }
    }
    return returned
};

//       X
// [-1,1,0,-3,3]

// 

