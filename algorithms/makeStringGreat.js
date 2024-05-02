/**
 * @param {string} s
 * @return {string}
 */
    /**
        in the context of this problem:

            - a string is 'bad' when it contains two of the same letter right next to each other,
            and one of them is capitalized.
                ex.
                    "leetcode" = GOOD
                    "leEeetcode" = BAD => "leetcode" = GOOD
                    "oOoo" = BAD
                    "GOOD" = BAD
                    "Good" = GOOD
                    "GOoD" = BAD => "Gd" = GOOD
                    "Good" = GOOD

            - A string can be made 'good' when, if there are two letters right next to each other and one of them is capitalized,
              both letters are removed. 
                - AN EMPTY STRING IS ALSO A GOOD STRING.
    */
                // lEetcode => ltcode
                // leEtcode => ltcode
                // leEetcode => letcode
var makeGood = function(s) {
    if(s.length<=1) return s
    for(let i = 0; i<s.length-1; i++){
        // Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)) === 32;
        if(Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)) === 32){
            let option1 = s.slice(0, i) + s.slice(i+2)
            return makeGood(option1)
        }
    }
    return s
};



/**
    this is a solution, but its very slow.

*/


