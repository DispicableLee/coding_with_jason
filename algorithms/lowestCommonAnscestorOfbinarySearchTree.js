/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */



function LCAAssistant(parent, p, q){
}



var lowestCommonAncestor = function(root, p, q) {
       console.log("root",root)
        console.log("p",p)
        console.log("q",q)
    if(root.val === p || root.val === q){
        return root
    }
    // Recursive down p, and look for q
    if( p < root.val && q < root.val){
        // p is less than root.val, q is also less than root.val
        // this means that both nodes are in the left subtree
        // search the left subtree
        console.log("searching left subtree")
       console.log("root",root)
        console.log("p",p)
        console.log("q",q)
        lowestCommonAncestor(root.left, p, q)
    }
    if(p> root.val && q > root.val){
        // p is greater than root.val, q is also greater than root.val
        // this means that both nodes are in the right subtree
        // search the right subtree
        console.log("searching right subtree")
        console.log("root",root)
        console.log("p",p)
        console.log("q",q)
        lowestCommonAncestor(root.right, p, q)
    }
        // if the first two checks did not check out,
        // this means that root is between p and q.
        // this means that both nodes (p and q) are to either side (different subtrees) of root
        // in which case the lowest common anscestor node is root.
        // return root.
    return root

};

/**
 *   n = number of nodes in the tree
 *   h = height of the tree
 * 
 * 
 *   h = log_2(n)
 *  
 *     o
 *   /   \
 *  o     o
 * / \   / \
 * o  o  o  o
 *        
 *  h = n
 *        o
 *       /
 *      o
 *     /
 *    o   
 *   /
 *  o
 * /
  0
 */

/**
 * p, q, root.val 
 * 
 * what are the cases that we could have
 * 
 * root.val < p, q
 *      LCA is on the right subtree of root
 * root.val > p, q
 *      LCA is on the left subtree of root
 * p < root < q
 *      
 */

/**

*/