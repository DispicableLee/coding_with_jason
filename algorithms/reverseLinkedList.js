/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * 
 *  [[ 3  ] =>] [[  5  ] =>]
 * 
 * 
 * Iterate through the linked list, call the current node = curr
 * 1. Set the `next` pointer of curr to the previous node.
 * 2. If curr is the first node, then `next` pointer of curr should be NULL/Undefined
 * 3. the previous node should be stored in order to tell the pointer of the next node where to point.
 *  3a. If we are on the first node (the HEAD) then we should store that somewhere too
 *                                
 *                        prev    temp
 *   [<- 1] [ <- 2] [3 ->] [4 ->] [5 ->]
 *   
 *   |
 *   V
 *   
 *  null <- 1 <- 2 <- 3 <- 4 <- 5
 * 
 */
var reverseList = function(head) {
    if(!head){
        return null
    }
    // let prev = head
    let prev = null
    let curr = head
    while(curr!=null){
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    return prev
};

// ---------

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let testList = new ListNode(1, new ListNode(2, null))

console.log(reverseList(testList))


// ====================================== Recursive Solution ==========================================


// 1. Base Case: if the node does not exist, return null
// 2. we need to be able to keep track of:
//      - The Previous Node
//      - The Current Node
//      - The Next Node
//  without swapping
// PREV, CURRENT, NEXT
// 3. helper functions may be necessary


//      P    C    N
// |    |    |
// v    v    v           
// 1 => 2 => 3 => 4 ===================> 4 => 3 => 2 => 1
// H



// 1 <= 2    3 => 4 ===================> 4 => 3 => 2 => 1



var recusivelyReverseList = function(head) {
    return reverseListHelper(head, null)
}

// 1
var reverseListHelper = function (currentNode, previousNode) {
    if(currentNode){
        let nextNode = currentNode.next;
        currentNode.next = previousNode
        return reverseListHelper(nextNode, currentNode)
    }else{
        return previousNode
    }
}

// for x in [x1, x2, x... xN]:
    // O(M) operation here
