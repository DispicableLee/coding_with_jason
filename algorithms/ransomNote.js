/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

-- Each letter in magazine can only be used once in ransomNote. --
-- ransomNote and magazine consist of lowercase English letters. --


Input: ransomNote = "a", magazine = "b"
Output: false

Input: ransomNote = "b", magazine = "aab"
Output: false



 magazineHash = {"a": , "b":0}
 [0]
 

Constraints:

1 <= ransomNote.length, magazine.length <= 10^5
 */
/**`
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magazineHash = {}
    for(const letter of magazine){
        if(magazineHash[letter]){
            magazineHash[letter]++
        }else{
            magazineHash[letter] = 1
        }
    }
    for(const letter of ransomNote){
        if(magazineHash[letter] && magazineHash[letter]>0){
            magazineHash[letter]--
        }else{
            return false
        }
    }
    return true
};