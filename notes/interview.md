


03/25/24
- Variables & Pointers
- English explanation (pseudo-code) was too code-y
    - 1 practical tip
        - Talking/writing (in english) ~3 min before any code gets written
- Practical tip - ask clarifying Qs about input/output. If everything is clear - quickly paraphrase the question






Computer
---------

"Hello World!!!"
^
| --------
|
|
|
|
myNewVar




Computer
---------

"Hello World!!!"



"Hello Person"
^
| --------
|
|
|
|
myNewVar










let myNewVar = "Hello World!!!"
myNewVar = "Hello Person"



console.log(myNewVar);


let myVar = "Hello World"

let myNewVar = myVar + "!!!"

let myNewVar = "Hello World" + "!!!"



console.log(myVar);




Head
 |
 V
(1) -> (2) -> (3)
        ^
        |
        C



var swapPairs = function(head) {
    let curr = head
    let temp = next
};


function actualSwap(currentNode, nextNode){
    temp = nextNode
    nextNode.next = currentNode
    currentNode.next = temp
    return currentNode
}

