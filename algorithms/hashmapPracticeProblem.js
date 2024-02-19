/**
 * Return true if A is a sub set of B
 * 
 * X is a subset of Y if Y contains all the elements in X (Y can contain more)
 * 
 * @param {set} a
 * @param {set} b
 * @return {boolean}
 */
var isSubset = function(a, b) {
    let map = {}
    for(const num of b){
        map[num] = true
    }
    for(const numB of a){
        if(map[numB]!=true) return false
    }
    return true
};

/**
 * hash function this uses is f(1) = (x^3 / 500) % 237812
 * 
 * b1 = [1,2,3,4,5,139832351234123]
 * b2 = [1,2,3,4,5,6]
 * a = [1,3,5]
 * 
 * 
 * 
 * 
 * 
 */
