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
