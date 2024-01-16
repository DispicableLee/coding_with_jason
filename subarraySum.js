// https://leetcode.com/problems/maximum-subnums/descripti  on/

/**
Given an integer nums nums, find the 
subnums
 with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subnums [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subnums [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subnums [5,4,-1,7,8] has the largest sum 23.

 */


// [  -1  ]
// [  -1   3  ]
// [  -1   3  -3  ]
// [  -1   3  -3   5  ]

// [  3  ]
// [  3  -3  ]
// [  3  -3   5  ]

// [ -3  ]
// [ -3   5  ]

// [  5  ]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    currentSum = 0

    let i = 0
    // outer loop
    while(i < nums.length) {
        let j = nums.length-1
        if (nums.length === 1 && nums[i] > 0) {
            currentSum = Math.max(currentSum, nums[i])
        } else if(nums.length===1 && nums[i] < 0){
            return 0
        }
        // inner loop
        while(j > i) {
            if (nums[i] > 0 && nums[j] > 0) {
                console.log("both ends are positive")
                // sum1 =sum of nums including i and j
                // sum2 =  sum of nums excluding i and j
                // sum1 = sum1_without_the_left_and_rightmost + SOME_POSITIVE_NUMBER
                // [X1, X2, .... X6, X7]
                // X2 ... + X6
                // X1 ... + X7
                // compare the two sums
                // if sum2 is bigger:
                    // i++
                    // j--
                    // then go from there
                    
                // else
                    // do not alter i and j
                
            } else if (nums[i] < 0 && nums[j] > 0) {
                console.log("left side is negative")
                i++
            } else if (nums[i] > 0 && nums[j] < 0) {
                console.log("right side is negative")
                j--
            } else {
                console.log("both ends are negative")
                i++
                j--
            }
            // [  3  -3   5  ]
            // [  3  -3  ]
            console.log(nums.slice(i, j+1))
            let potentialSum = nums.slice(i, j+1).reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            }, 0);

            currentSum = Math.max(currentSum, potentialSum)
            // [-3]
            // check if left or right side is negative
            // if nums[j] is negative, j--, keep i as is
            // if nums[i] is negative, i++, keep j as is





            j--
        }
        i++
    }

    return currentSum
};