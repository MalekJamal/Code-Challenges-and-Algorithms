// Write here the code challenge solution
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const depthFirstValues = (root) => {

    if (root === null) return [];

    const stack = [root];
    const result = [];
    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.value);

        if (current.right)
            stack.push(current.right);
        if (current.left)
            stack.push(current.left);

    }
    return result;
};

const isSame = (root1, root2) => {

    const tree1 = depthFirstValues(root1);
    const tree2 = depthFirstValues(root2);

    let result = false;
    if (tree1.length === tree2.length) {
        for (let i = 0; i < tree1.length; i++) {
            if (tree1[i] !== tree2[i]) {
                return false;
            } else {
                result = true;
            }
        }
        return result;
    }
    return result;
};

// Recursion
// var isSameTree = function(p, q) {
//     if(p === null && q === null){
//         return true;
//     }
//     if((p === null && q !== null) || (p !== null && q === null) || (p.val !== q.val)){
//         return false;
//     }

//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

// };


module.exports = {
    isSame,
    Node
}



