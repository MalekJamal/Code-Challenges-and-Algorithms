// Write here the code challenge solution

class Node {
    constructor(root, left = null, right = null) {
        this.root = root;
        this.left = left;
        this.right = right;
    }
}

const sortedArrayToBST = (nums, left = 0, right = nums.length - 1) => {
    if (nums.length === 0) return null;
    // Base case
    if (left > right) return null;

    let midIdx = Math.floor((left + right) / 2);
    let root = new Node(nums[midIdx]);

    root.left = sortedArrayToBST(nums, left, midIdx - 1);
    root.right = sortedArrayToBST(nums, midIdx + 1, right);

    return root;
};

module.exports = sortedArrayToBST;
