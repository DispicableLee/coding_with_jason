
var RandomizedSet = function() {
    this.randomSet = new Set()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.randomSet.has(val)){
        return false
    }else{
        this.randomSet.add(val)
        return true
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.randomSet.has(val)){
        this.randomSet.delete(val)
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
    if(this.randomSet.size===0){
        return false
    }else{
        let randomNumber = Math.floor(Math.random() * this.randomSet.size)
        for(val of this.randomSet){
            if(randomNumber===0){
                return val
            }
            randomNumber--
        }
    }
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */