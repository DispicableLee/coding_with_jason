/**
    Given a binary tree, determine if it is height-balanced.
        A height-balanced binary tree is a binary tree in which 
    the depth of the two subtrees of every node never differs 
    by more than one.
*/




/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


/**
 *  maxDepthLeftSubtree = 4
 *  maxDepthRightSubtree = 3
 * 
 * 
 * You cannot only check the depths at the root level
 * You must check at each sub-tree
 * 
 *              R
 *            /  \
 *           RL    o
 *          / \     \
 *         o   o     o
 *          \          \
 *           o           o
 *          /
 *         o            
 * 
 * 
 * 
 */

function maxDepthWithHPointer(root, h) {
    if (!root){
        return h
    }else{
        h++
    }
    
    let leftTemp = maxDepthWithHPointer(root.left, h)
    let rightTemp = maxDepthWithHPointer(root.right, h)
    return Math.max(rightTemp, leftTemp)
}


var maxDepth = function(root) {
    return maxDepthWithHPointer(root, 0)
};


/**
 * N = number of elements in array
 */



/**
 * for trees, there are few more options,
 * but ultimately, there is that 1 base variable
 * 
 * N = number of nodes in the tree
 * H = height of tree
 * 
 * DND = where we are in the algorithm
 * 
 * When do we use N to describe runtime,
 * or H?
 * 
 * Depends on the question, and which variable is most relevant
 */


/**

1 + 2 + 3 + 4 ... + N = O(N^2)

1 + 2 +... + 9 = 


for (i; i < 10) {
    for (j; j < i) {

    }
}
 */


/**
 * N = num nodes in root
 * 
 * isBalanced gets called on each node in the tree
 * when isBalanced is called on a given node, what is the Big O runtime?
 * 
 * we call maxDepth on its children for that given node
 * maxDepth for a node's children is <= N
 * 
 * isBalanced is called N times
 * maxDepth is called for its children at each point
 * X <= N
 * 
 * N * N
 */

// REFACTORED VERSION
var isBalanced = function (root) {
    if(!root){
        return true
    }
    let leftDepth = maxDepth(root.left) // O(N)
    let rightDepth = maxDepth(root.right) // O(N)

    // O(1)
    if(Math.abs(leftDepth - rightDepth)>1){
        return false
    }

    let rightTemp = isBalanced(root.right)
    let leftTemp = isBalanced(root.left)
    return rightTemp && leftTemp
};


// ORIGINAL VERSION
var isBalanced = function (root) {
    if(!root){
        return true
    }
    let leftDepth = maxDepth(root.left) // O(N)
    let rightDepth = maxDepth(root.right) // O(N)

    // O(1)
    if(Math.abs(leftDepth - rightDepth)>1){
        return false
    }
    
    if(root.right && root.left){
        let rightTemp = isBalanced(root.right)
        let leftTemp = isBalanced(root.left)
        return rightTemp && leftTemp
    }
    
    if(root.left){
        let leftTemp = isBalanced(root.left)
        return leftTemp
    }
    if(root.right){
        let rightTemp = isBalanced(root.right)
        return rightTemp
    }
    return true

};









/**
    Observations:
        - a tree with zero nodes is balanced.

        - a tree with just the root node is balanced.
        - a tree with a root node that has two children is balanced.
        - if root.left has children and root.right does not, it is balanced.
        - if root.left has grandchildren and root.right does not have children, it is not balanced.



        - I believe that the first two cases can be accounted for in the main function,
            while the last three will be handled in the helper function.
*/

/**
    once again, we will use a recursive helper function that takes in two arguments,
    'root' and 'b' (for 'balance').
    when the helper function first starts

*/