/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 */


function makeMapOfLetters(word){
    let map = {}
    for(const letter of word){
        map[letter] = map[letter]+1 || 1
    }
    return map
}

console.log(makeMapOfLetters("hi"))

var groupAnagrams = function(strs) {
    let returned = []
    let letterMapSet = new Set();
    for(let i = 0; i<strs.length; i++){
        let currentiLetterMap = makeMapOfLetters(strs[i])
        let temp = [strs[i]]
        for(let j = i+1; j<strs.length; j++){
            let currentjLetterMap = makeMapOfLetters(strs[j])
            if(currentiLetterMap === currentjLetterMap && !(letterMapSet.has(currentiLetterMap))){
                temp.push(strs[j])
            }
        }
        letterMapSet.add(currentiLetterMap)
        returned.push(temp)
    }

    
};