/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 */


function makeMapOfLetters(word){
    let newWord = word.split("").sort().join("")
    let map = {}
    for(const letter of newWord){
        map[letter] = map[letter]+1 || 1
    }
    return map
}

// console.log(makeMapOfLetters("hi"))



function areTwoMapsEqual(map1, map2){
    let map1Copy = Object.assign({}, map1)
    let map2Copy = Object.assign({}, map2)
    let map2Keys = Object.keys(map2)
    let map1Keys = Object.keys(map1)
    for(const key of map2Keys){
        if(map1Copy[key]){ 
            map1Copy[key] = map1Copy[key] - map2Copy[key]
        }else{
            return false
        }
    }
    for(const key of map1Keys){
        if(map1Copy[key]!=0) return false
    }
    return true
}



// potential helper function: check if a map exists (equal values) in a set
function doesSetHaveMap(set, targetMap){
    for(const map of set){
        if(areTwoMapsEqual(map, targetMap)) return true
    }
    return false
}







var groupAnagrams = function(strs) {
    let returned = []
    let uniqueAnagramsSeenThusFar = new Set();
    for(let i = 0; i<strs.length; i++){
        let currentiLetterMap = makeMapOfLetters(strs[i])
        if(!(doesSetHaveMap(uniqueAnagramsSeenThusFar, currentiLetterMap))){
            let temp = [strs[i]] // A new group of anagrams
            console.log("does not have map, ", strs[i],uniqueAnagramsSeenThusFar)
            for(let j = i+1; j<strs.length; j++){
                let currentjLetterMap = makeMapOfLetters(strs[j])
                if(areTwoMapsEqual(currentiLetterMap, currentjLetterMap)){
                    temp.push(strs[j])
                }
            }
            returned.push(temp)
        }
        uniqueAnagramsSeenThusFar.add(currentiLetterMap)
    }
    return returned
};
//                                  i       j     j
console.log(groupAnagrams(["cat", "tac", "bat", "act"]))


// letterMapSet says I ahve receieved the call to my "has" method with the "target"
// my "has" method, does something like this:
// go thru each of my elements, and check if currentElement == target. If any are true, return true
