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
 * @return {TreeNode}
 * 
 * 
 * 
 *      4
 *     / 
 *    5   
 *  / 
 * 6
 * 
 * 
 * 
 *      4
 *       \
 *        5
 *          \
 *           6
 */        



var invertTree = function(root) {
    if(!root){
        return null
    }
    const rootTree = root

    let left;
    let right;
    if(rootTree.left && rootTree.right){
        left = rootTree.left
        right = rootTree.right
        rootTree.left = right
        rootTree.right = left
    }else if(rootTree.left){
        left = rootTree.left
        rootTree.right = left 
        rootTree.left = null
    }else if(rootTree.right){
        right = rootTree.right
        rootTree.left = right
        rootTree.right = null
    }
    
    if(left){
        invertTree(left)
    }
    if(right){
        invertTree(right)
    }
    return rootTree
};



/**
    Although it is hard to capture the picture visually, what this 'inversion' basically means is that
        the two child nodes of any given parent node switch places.
    Given just one parent node and two child nodes this is relatively easy.
        its when there are more branches that this gets difficult.
    We may potentially need a helper function that actually does the switching, while the higher-order function 
        does the traversing.

        1. start with parent node.
        2. switch two child nodes.
        3. select one of the two switched nodes 
        4. repeat.
    
    in this particular solution, I will do a DFS-style algorithm, working from the left-most side of the tree and 
        work my way rightwards.



*/