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
    if (nums.length === 1) {
        return nums[0]
    }

    // Number.MIN_SAFE_INTEGER
    let currentSum = Number.MIN_SAFE_INTEGER
    for(const num of nums){
        currentSum = Math.max(currentSum, num)
    }

    let i = 0
    // outer loop
    while(i < nums.length) {
        let j = nums.length-1
        // inner loop
        while(j > i) {
            if (nums[i] >= 0 && nums[j] >= 0) {
                console.log("both ends are positive", nums.slice(i, j+1))
            } else if (nums[i] < 0 && nums[j] >= 0) {
                console.log("left side is negative", nums.slice(i, j+1))
                i++
            } else if (nums[i] >= 0 && nums[j] < 0) {
                console.log("right side is negative", nums.slice(i, j+1))
                j--
            } else{
                console.log("both ends are negative", nums.slice(i, j+1))
                i++
                j--
            }
            //  i=1  j=0
            // [-2, -1]

            // In relationship to I & J, when is the subarray empty?
            // If this subarray is EMPTY, do NOT do this next part
            if(i<=j){
                let potentialSum = nums.slice(i, j+1).reduce((accumulator, currentValue) => {
                    return accumulator + currentValue
                }, 0);
                currentSum = Math.max(currentSum, potentialSum)
            }
            j--
        }
        i++
    }

    return currentSum
};




// Specifically storing the arrays, and the sums of those arrays: objects
/**
 *  sumObject = {
 *      A: [X1 X2 X3 X4],
 *      B: [X2 X3 X4],
 *      C: [X3 X4],
 *      D: [X4],
 *      }
 * 
 * 
 * 
 * 
 * 
 */



// [ = A === currentSum
// [ X1 + X2 + X3 ] = B
// [ X1 + X2 ] = C
// [ X1 ] = D

// [ X2 + X3 + X4 ] = A - X1 = A2
// [ X2 + X3 ] = B - X1 = B2
// [ X2 ] = C - X1

// [ X3 + X4 ] = A2 - X2 = A3
// [ X3 ] = B2 - X2

// [ X4 ] = A3 - X4





// [ X1 + X2 + X3 + X4 ]

// inputArray = [100, 100, -2, 1]
// localSum = [100, 200, 198, 199]
// ...do some stuff so that localSum is now populated with some values
// localSum[i] = the maximum subarray sum ending at i

// localSum[0] = the max subarray sum that ends at the 0th element
// localSum[1] = the max subarray sum that ends at the 1st element
// localSum[2] = the max subarray sum that ends at the 2nd element
// localSum[3] = the max subarray sum that ends at the 3rd element



// localSum[i] = the maximum subarray sum ending at i
// max that ends at x(4-1) = Y
// What is the maximum subarray that ends at X4?

// if Y is negative 
    // return x4 
// if y is positive or zero 
    // return y + x4 

// const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);


function maximumSumSubArray(nums){
    let localSum = []
    localSum.push(nums[0])
    for(let i = 1; i < nums.length; i++){
        ans = localSum[i-1] < 0 ? nums[i] : localSum[i-1] + nums[i];
        localSum.push(ans);
    }
    const max = localSum.reduce((a, b) => Math.max(a, b), -Infinity);
    return max
}




// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Using localSum, tell me the max sum subarray of the input array (the actual problem)
// the max sum subarray would be the highest value in localSum



// Assume that the optimal answer without considering X4 (max sum subarray) ends at X3
// This max subarray without yet considering X4 is 150

// What is the maximum subarray that also considers X4?

// if x4 is negative, 150
// else 150 + x4

// max that ends at x3 = 150
// What is the maximum subarray that ends at X4?
//  150 + X4



// [ [X1+X2+X3===y] X4 ]

// Slice 1 [ X1 X2 X3   ]

// Slice 2 [    X2 X3 X4]



/**
 * 
 * 1. (Base case) We need to check for single element subarrays
 * 2. Negative numbers should be skipped (on the ends), positive numbers should NOT be skipped (on the ends)
 * 3. Nested for loop (while loop) traversal is correct. However, using #2 to reduce the number of loops is tricky at best, impossible at worst
 * 
 * N^3 operation = double loop and also slicing
 * - Slicing should be able to be faster than O(n)
 * - 
 */
