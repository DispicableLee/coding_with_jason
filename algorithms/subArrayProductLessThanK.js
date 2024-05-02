/**
    Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

    Example 1:

    Input: nums = [10,5,2,6], k = 100
    Output: 8
    Explanation: The 8 subarrays that have product less than 100 are:
    [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
    Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
    Example 2:

    Input: nums = [1,2,3], k = 0
    Output: 0



    NOTE: the sum has to be STRICTLY (<) less than k. Not <=, "<"
    NOTE: the numbers to be calculated have to be CONTIGUOUS, as in, right next to each other. you cannot skip a number.
    NOTE: a subarray of ONE number is allowed, in which case the unspoken other number is "1".
    NOTE: the example answer seems to have the number of subarrays in an order:
        - starts with individual numbers in their own subarrays, then slowly 
            increases the number of elements in those subarrays
    NOTE: 

*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */




// [1,2,3,4,5], k = 4

var numSubarrayProductLessThanK = function(nums, k) {
    
};

