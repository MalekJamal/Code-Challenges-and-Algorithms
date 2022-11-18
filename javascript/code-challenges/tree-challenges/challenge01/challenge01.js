// Write here the code challenge solution
// Write here the code challenge solution
// Write here the code challenge solution

// function construct(preOrder, inOrder){
//     if(preOrder.length < 1) return null;
//     if(inOrder.length < 1) return null;

//     const root = preOrder[0];
//     let tree = new Node(root);
// };


function TreeNode(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
}


const buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;

    //preorder = [3, 9, 20, 15, 7];
    //inorder = [9, 3, 15, 20, 7];
    let root = new TreeNode(preorder[0]); //3
    let midIdx = inorder.indexOf(root.value); // 1

    root.left = buildTree(preorder.slice(1, midIdx + 1), inorder.slice(0, midIdx));// [9] || [9] 
    root.right = buildTree(preorder.slice(midIdx + 1), inorder.slice(midIdx + 1)); // [20,15,7] || [15,20,7] 

    return root;
};
// const preorder = [3, 9, 20, 15, 7];
// const inorder = [9, 3, 15, 20, 7];
// let root = new TreeNode(preorder[0]); //3
// let midIdx = inorder.indexOf(root.value); // 1
// console.log(root.value); // 3
// console.log(midIdx); //1
// console.log(preorder.slice(2));
// console.log(inorder.slice(2));
module.exports = buildTree;