


/**
 * 
 * [                 |   XXXXXXXXXXXXX    ]
 * [        |   XXXXXXXXXXXXXXXXXXXXXX    ]
 * 
 * 
 *  S                 E
 * [1,2,3,4,5,6,7,"8",9]
              S       E





    S                 E
   [1,"2",3,4,5,6,7,8,9]
    |       |
 */
    






var search = function(nums, target){
    binarySearch(nums, target, 0, nums.length-1)
    // Everything below here moves to the binarySearch function
}

// Define start, end, midpoint
// end=nums.length
// do start, end, midpoint (always) represent valid indices in the array?



// start = 0
// end = nums.length - 1


              M S       E
// [0,1,2,3,4,5,6,7,"8",9]

// Is start inclusive/exclusive of valid elements we are looking at?
// inclusive
// Is end inclusive/exclusive of valid elements we are looking at?
// inclusive

// Even number, we get the actual halfed value
// Odd number, we round down

// start = 0, end = 3
// midpoint = (0 + 3) / 2 = 1

// start = 1, end = 1
// midpoint = (1 + 1) / 2 = 1

var binarySearch = function(nums, target, start=0, end){
    let midPoint = Math.floor((start + end)/2)


// We know we haven't found the target when we are looking at only 1 element and that is not the target

// target = 0
//  S E
//  M is index0, the element 2
// We establish that M is NOT the target

// target = 0
//         ------->
//       E S
// <------
//        [2,5]
// S = 0, E = -1



    // [0,1,2,3,4]
    if(end === start){
        if(nums[start]!=target){
            return -1
        }else{
            return start
        }
    }else if(start > end){
        return -1
    }
    
    if(nums[midPoint]=== target){
        return midPoint
    }else if(nums[midPoint] < target){
        // target is on the right side
        start = midPoint+1
        return binarySearch(nums, target, start, end)
    }else if(nums[midPoint] > target){
        // target is on the left side
        end = midPoint-1
        return binarySearch(nums, target, start, end)
    }
}

