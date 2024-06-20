/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode(null, null)
    let dummyPointer = newList

    // if(!list1 && !list2){
    //     return null
    // }else if(list1 && !list2){
    //     return list1
    // }else if(list2 && !list1){
    //     return list2
    // }

    let listA = list1
    let listB = list2



    while(listA && listB){
        if(listA.val <= listB.val){
            newList.next = new ListNode(listA.val, null)
            newList = newList.next
            listA = listA.next
        }else{
            newList.next = new ListNode(listB.val, null)
            newList = newList.next
            listB = listB.next
        }
    }                                                                                                                                                                                                                                                                


    if(listA){
        while(listA){
            newList.next = new ListNode(listA.val, null)
            newList = newList.next
            listA = listA.next
        }
    }else if(listB){
        while(listB){
            newList.next = new ListNode(listB.val, null)
            newList = newList.next
            listB = listB.next

        }
    }
    return dummyPointer.next
};

// newList:   1 -> 3 -> ()



/**
    lists are sorted in NON-DECREASING ORDER
        theoretically, we can have a list thats just all 2's
            check the </>/=/<=/>=, etc
    the two lists may or may not be of the same length
        keep this in mind 
    We can make no assumptions of the 'distance' between numbers in any of the lists,
    only that they are NON-DECREASING


    A-   1   2   2   3   4


        
    B-    2   10   12  



*/
