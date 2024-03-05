/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 */


function sortStringsAlphabetically(word){
    let wordCopy = word
    return wordCopy.split("").sort().join("")
}

// console.log(makeMapOfLetters("hi"))



// ==== potential helper function: check if a map exists (equal values) in a set
// function doesSetHaveSortedString(set, sortedString){
//     for(const string of set){
//         if(areTwoSortedStringsEqual(string, sortedString)) return true
//     }
//     return false
// }

/**
 * cataa
 * taaca
 * 
 * 
 * {c:1, a:1, t:1}
 * act
 * 
 * {t:1, a:1, c:1}
 * act
 */

/**
 * cat tac bat act
 * 
 * 
 * cat zsx cst omg
 * 
 * 
 * cat | tac bat cat
 * tac | bat cat
 *
 * 
 *  bat | cat
 * 
 *  * wcat | ztac xbat ycat
 * ztac | xbat ycat
 * xbat | ycat
 */

/**
 * Buy & Sell Stock
 * Buy on day I, sell on day J, there are N^2 combinations of this
 * Intuition = As we were advancing days (going thru the array), we could store information about the days we had already seen
 * 
 * 
 * Anagrams
 * Look at string I, compare w other strings J, there are N^2 checks of this
 * Intuition = As we are advancing thru the array, how can we efficiently store info about the strings we have seen so far
 * 
 * 
 *                 X
 *
 * wcat ztac xbat bxat ycat
 * 
 * wcat -> actw
 * {
 *      "actw": [wcat]
 *      "actz": [ztac]
 *      "abtx": [xbat]
 * }
 * 
 * To check if a word is in an anagram, is constant time (* the time to sort the word)
 * bxat -> abtx
 * 
 * 
 * 
 * {
 *      "wcat": [wcat],
 *      "ztac": [ztac],
 *      "abtx": [xbat, bxat]
 * }
 *
 * bxat -> abtx
 */


// option 1:loop through copy of strs and sort them all alphabetically


var groupAnagramsOption2 = function(strs){
    let sortedStringToGroup = {}
    for(const currentString of strs) {
        let sortedString = sortStringsAlphabetically(currentString)
        if(sortedStringToGroup[sortedString]){
            sortedStringToGroup[sortedString].push(currentString)
        }else{
            sortedStringToGroup[sortedString] = [currentString]
        }
    }
    console.log(sortedStringToGroup)
    return Object.values(sortedStringToGroup)
}

console.log(groupAnagramsOption2(["cat", "tac", "bat", "act"]))



function mapSortedStringsToStringsAndIndices(map, index, string){
    if(map[string]){
        map[string].push(index)
    }else{
        map[string] = [index]
    }
    return map
}

var groupAnagramsWithCopy = function(strs){
    let returned = []
    let sortedLetterMap = {}
    let strsCopy = strs.map((s)=>sortStringsAlphabetically(s))
    for(let i = 0; i<strsCopy.length; i++){
        sortedLetterMap = mapSortedStringsToStringsAndIndices(sortedLetterMap, i, strsCopy[i])
    }
    console.log(sortedLetterMap)

    for(const key of Object.keys(sortedLetterMap)){
        let temp = []
        for(index of sortedLetterMap[key]){
            temp.push(strs[index])
        }
        returned.push(temp)
    }
    return returned
}

// console.log(groupAnagramsWithCopy(["cat", "tac", "bat", "act"]))

// n = length of strs
// k = max length of strs[i]

// n * k * log(k)

var groupAnagrams = function(strs) {
    let returned = []
    let sortedStringSet = new Set();
    
    for(let i = 1; i<strs.length; i++){
        let currentISortedString = sortStringsAlphabetically(strs[0])
        let currentJSortedString = sortStringsAlphabetically(strs[i])
        if(!(sortedStringSet.has(currentISortedString))){
            let temp = [strs[i]] // A new group of anagrams
            
            // for(let j = i+1; j<strs.length; j++){
            //     let currentJSortedString = sortStringsAlphabetically(strs[j])
            //     if(currentISortedString === currentJSortedString){
            //         temp.push(strs[j])
            //     }
            // }
            
            returned.push(temp)
        }
        
        sortedStringSet.add(currentISortedString)
        
    }
    return returned
};
//                                  i       j     j
// console.log(groupAnagrams(["cat", "tac", "bat", "act"]))


// letterMapSet says I ahve receieved the call to my "has" method with the "target"
// my "has" method, does something like this:
// go thru each of my elements, and check if currentElement == target. If any are true, return true
