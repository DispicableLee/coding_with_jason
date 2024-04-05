
var RandomizedSet = function() {
    this.randomHash = new Map()
    this.randomArray = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    let length = this.randomArray.length
    if(this.randomHash[val]){
        this.randomArray.push(val)
        this.randomHash[val] = length
        return true
    }else{
        return false
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */






//      3
// [1,2,3,4,5]
//      5
// [1,2,5,4]
// 


RandomizedSet.prototype.remove = function(val) {
    if(this.randomHash[val]){
        let targetIndex = this.randomHash[val]
        let lastElement = this.randomArray[-1]
        this.randomArray[targetIndex] = lastElement
        this.randomArray.pop()

        delete this.randomHash[val]

        this.randomHash[lastElement] = targetIndex
        return true
    }else{
        return false
    }





};

/**
 * 
 * 
 * 
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randomIndex = Math.floor(Math.random() * this.randomArray.length)
    return this.randomArray[randomIndex]
};

/**
 * WE NEED TO BE ABLE TO INSERT AN ITEM IN 0(1)
 * We need to be able to insert an item in O(1)
 * - Hash Map? Yes
 * - Arrays? Yes, but only if you are inserting to the end of the array
 * We need to be able to remove an item in O(1)
 * - Hash Map? Yes 
 * - Arrays? Yes, but only if you are removing the end of the array
 * We need to be able to select an item randomly in O(1) 
 * - We need to select a random "index" in O(1)
 *   - Hash Map? No
 *   - Arrays? Yes
 * - We need to be able to locate the number at the selected index in O(1) 
 *   - Which data structures can have an "index" concept? Lists (including Arrays), Hashes, Linked Lists 
 *   - Hashes, Lists(Arrays) 
 */

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */