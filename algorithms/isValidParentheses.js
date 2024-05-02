/**
 * @param {string} s
 * @return {boolean}
 */


/**
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

    ({[]})

    example 1. "()[]{}" = TRUE
    example 2. "(]" = FALSE
    example 3. "({[]})" = TRUE
    example 4. "(([))] = FALSE


    NOTES:
        - valid parentheses being PAIRS is a big help
        - for every opening bracket there is exactly one closing bracket with out interrupstions
            - Interruption in this case being another opening bracket without a closing bracket
                - which would be an invalid string
            - if we consider an opening bracket a 1, and a closing bracket a 2
                - 12 () is valid
                - 1122 (()) is valid
                (([]))
                - 1112212 ((())() is invalid

        - we could do this with counts
            - curvy
            - curly
            - straight

        ()

        
*/

var isValid = function(s) {
    let brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    if(!(Object.keys(brackets).includes(s[0]))){
        return false
    }
    
    let bracketStack = []
    let curvy = 0
    let curly = 0
    let straight = 0
    for(let i = 0; i<s.length; i++){
        if(s[i] === "("){
            curvy++
            bracketStack.push(s[i])
        }else if(s[i]==="{"){
            curly++
            bracketStack.push(s[i])
        }else if(s[i]==="["){
            straight++
            bracketStack.push(s[i])
        }
        if(s[i]===")"){
            if(bracketStack[bracketStack.length-1]==="("){
                curvy--
                bracketStack.pop()
            }else{
                return false
            }
        }else if(s[i]==="}"){
            if(bracketStack[bracketStack.length-1]==="{"){
                curly--
                bracketStack.pop()
            }else{
                return false
            }
        }else if(s[i]==="]"){
            if(bracketStack[bracketStack.length-1]==="["){
                straight--
                bracketStack.pop()
            }else{
                return false
            }
        }
        console.log(bracketStack)
    }
    return curly===0 && curvy===0 && straight===0
};

console.log(isValid("{{[]}}"))
