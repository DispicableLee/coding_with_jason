/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(p) {
    let x = p.replace(/[^a-z0-9]/gi,'').toLowerCase().split("")
    console.log(x)
    const left = 0
    const right = x.length-1
        for(let i = 0, j = x.length - 1; i <= j; i++, j--){
            if(x[i] !== x[j]) return false;
        } 
             return true;
}
