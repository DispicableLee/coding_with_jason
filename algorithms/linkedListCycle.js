function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// let a = new ListNode("a", null)
// let b = new ListNode("b", null)
// let c = new ListNode("c", null)
// a.next = b;
// b.next = c;
// c.next = a

// a -> b -> c
var hasCycle = function(head) {
    let listNodeArray = new Set()
    let curr = head
    while(curr!=null){
        listNodeArray.add(curr)
        if(listNodeArray.has(curr.next)){
            return true
        }
        curr = curr.next

    }
    return false
};

/**
 * Using a set you get O(n) runtime, but also O(n) memory
 * 
 * Can you do it in O(1) memory?
 * 
 * Hint: pointers
 * 
 * https://www.youtube.com/watch?v=6OrZ4wAy4uE
 * https://www.youtube.com/results?search_query=linked+list+cycle 
 */

/**
 * Using 2 pointers
 * 
 * Take 2 pointers to the start (head) of the given LL.
 * Move each pointer "down" the LL at different "speeds"
 * 
 * If a pointer reaches the end, what can we say about the existence of a cycle?
 * If the 2 pointers meet at the same node, what can we say about the existence of a cycle?
 * 
 * 
 * P1   p1
 * P2        p2
 * H
 * C    c
 * 
 *      
 *      
 *           P2                          
 * 0 -> 1 -> 2 -> 3                 
 *      ^         |
 *      |         |
 *      ----------
 * 
 *      p2            
 * 0 -> 1 -> 2 -> 3
 *      ^         |
 *      |         |
 *      ----------
 * 
 *                p2    
 * 0 -> 1 -> 2 -> 3
 *      ^         |
 *      |         |
 *      ---------- 
 * 
 * 
 */

let a = new ListNode("a", null)
let b = new ListNode("b", null)
let c = new ListNode("c", null)
a.next = b;
b.next = c;
c.next = b

var hasCycleO1  = function(head){
    let slow = head
    let fast = head
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(slow===fast) return true
    }
    return false
}

console.log(hasCycleO1(a))





