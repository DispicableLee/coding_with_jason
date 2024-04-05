/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
    
// 1 <= 2    3 <= 4 => 5 => 6

/**
   1 node (skipNode)
 * 3 node
 * 4 node
 */

/**
 * Assume we are at 3 & 4. Meaning, all previous nodes have been properly swapped.
 * EXCEPT the "skipped node" which needs to set its pointer to the second node at this current moment (4)

    PROBLEM: we can swap two nodes,
        - we cannot (yet) 

    Swap 1 & 2, and try get 1's next to the output of swapping 3 & 4
    // 1 => 2 => 3 => 4
    


    Other approach
    // 1         3 => 4
    Swap 3 & 4, and retroactively "fix" the next pointer of 1



 * skippedNode = 1
 * 3 is n1
 * 4 is n2
 *
 * skippedNode.next = n2
   skippedNode = n1
   n2.next = n1
 */



/**
 * while 'curr.next' exists, take the current node, and the node after that.
 * in a helper function, save the next node's "next" somewhere, then reassign the "next" to the current node, 
    and set the current node's "next", to the original next node's "next"
 */

/**
 * For every two nodes that exist
 * Point the second node to the first node,
 * And keep track of the first node.
 * 
 * Now move to the next two nodes
 * Point the second node to the first node,
 * Now take the node you saved previously, and point that to the second node.
 * 
 * Repeat
 */



var swapPairs = function(head) {
    let skipNode = head
    let curr = head
    let next = curr.next
    next.next = curr
};


function actualSwap(currentNode, nextNode){
    temp = nextNode
    nextNode.next = currentNode
    return currentNode
}

// C
//      N
// 




// 1 => 2 => 3 => 4


// ==========
// |         V
// 1 <= 2    4 => 3
// 
// 2 => 1 => 4 => 3
// 
// 
// 
// 
// 


var swapPairs = function(head) {

    if (!head || !head.next) {
        return head;
    }
    
    var newHead = head.next;
    var prev = null;
    var curr = head;
    
    while (curr && curr.next) {
        // curr = 1, next = 2
        var next = curr.next;

        curr.next = next.next; // 3
        next.next = curr;
        
        if (prev) {
            prev.next = next;
        }
        
        prev = curr;
        curr = curr.next;
    }
    
    return newHead;
};
