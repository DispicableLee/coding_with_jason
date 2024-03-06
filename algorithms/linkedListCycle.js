function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let a = new ListNode("a", null)
let b = new ListNode("b", null)
let c = new ListNode("c", null)
a.next = b;
b.next = c;
c.next = a






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

