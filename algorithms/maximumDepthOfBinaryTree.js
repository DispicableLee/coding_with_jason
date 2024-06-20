/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
    Given the root of a binary tree, return its maximum depth.
    A binary tree's maximum depth is the number of nodes 
    along the longest path from the root node down to the farthest leaf node.

*/



/**
 * 
 *      o
 *     /
 *    o
 *   /
 *  o
 * 
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

// Given, root, and h, what exactly is the return of this function?
// h = level of root
// temp = max depth of root

function maxDepthWithHPointer(root, h){
    if(root.left && root.right){
        h++
        let leftTemp = maxDepthWithHPointer(root.left, h)
        let rightTemp = maxDepthWithHPointer(root.right, h)

        // h & temp ARE correlated to the runtime in some way

        // but they do not determine the runtime in any way

        return Math.max(rightTemp, leftTemp)
    }
    if(root.left){
        h++
        let temp = maxDepthWithHPointer(root.left, h)
        return temp
    }
    if(root.right){
        h++
        let temp = maxDepthWithHPointer(root.right, h)
        return temp
    }
    return h
}




var maxDepth = function(root) {
    if(!root){
        return null
    }
    return maxDepthWithHPointer(root, 1)
    
};





/**
    we need something to keep track of which 'level' we are on as we traverse the tree
    this pointer should only increment whenever we encounter a node with children,
    then recursively iterate the algorithm with its children and the pointer.
*/


/**
    BIG-O notation write-up:

*/