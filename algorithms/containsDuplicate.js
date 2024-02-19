var containsDuplicate = function(nums) {
    let numSet = new Set()
    for(const i of nums){
        if(numSet.has(i)) return true
        numSet.add(i)
    }
    return false
};
