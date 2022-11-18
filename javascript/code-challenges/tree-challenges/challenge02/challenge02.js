// Write here the code challenge solution
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const depthFirstValues = (root) => {
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
    console.log(result);
    return result;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


const a1 = depthFirstValues(a);
const a2 = depthFirstValues(a);




