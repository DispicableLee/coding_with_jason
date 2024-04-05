/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let parenthesesArray = []
    recursiveHelper(parenthesesArray,"",n)
    return parenthesesArray
};



var recursiveHelper = function(parenthesesArray, currentString, n, countOfOpen=0, countOfClosed=0) {
  // Base case  
  if (currentString.length===n*2){
    parenthesesArray.push(currentString)
  } else { // Recursive case
    if(countOfOpen<n){
      var option1 = currentString + "("
      recursiveHelper(parenthesesArray, option1, n, countOfOpen+1, countOfClosed)
    }

    if(countOfClosed< countOfOpen){
      var option2 = currentString + ")"
      recursiveHelper(parenthesesArray, option2, n, countOfOpen, countOfClosed+1)
    }
  }
}

/**
// WITH ANY SET OF VALID PARENTHESES, YOU HAVE 
-   # of ( == # of )
-   At any given point in a valid parenthesis string, the # of (  >=  # of ) so far


n = 3
partialString = ()(

We have this "partialString",
We are given an "n" number
When can I add an "(" to partialString?

if(countOfOpen<n)
    you can add another opening parentheses

When can I add an ")" to partialString?
if(countOfClosed < countOfOpen)

n = 2


               (
          /         \
        ((           ()
      /             / 
   (((            ()(
    \               \
   ((((             ()()




n = 1
()

n = 2
()(),(())

n = 3
()()(), (()()), ((())), (())(), ()(()),



(()())




o c, tell me in math, a relationship between them

o >= c

o0
c0

o1
c0

o2
c0

o2
c1

o3
c1

o3
c2

o3
c3


()()()
o0
c0

o1
c0

o1
c1

o2
c1

o2
c2

o3
c2

o3
c3

*/