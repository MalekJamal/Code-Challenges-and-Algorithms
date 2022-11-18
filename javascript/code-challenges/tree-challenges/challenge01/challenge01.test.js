// Write your test here
// Write your test here
// Write your test here

const buildTree = require("./challenge01");


describe("Testing Tree", () => {

    test("Testing empty input", () => {
        const tree = buildTree([], []);
        expect(tree).toBeNull();
    });

    it("Testing build tree-1", () => {
        const preorder = [3, 9, 20, 15, 7];
        const inorder = [9, 3, 15, 20, 7];
        const tree = buildTree(preorder, inorder);


        expect(tree.value).toEqual(3);
        expect(tree.left.value).toEqual(9);
        expect(tree.left.left).toBeNull();
        expect(tree.left.right).toBeNull();
        expect(tree.right.value).toEqual(20);
        expect(tree.right.left.value).toEqual(15);
        expect(tree.right.left.left).toBeNull();
        expect(tree.right.right.value).toEqual(7);
        expect(tree.right.right.right).toBeNull();

    });

    test("Testing build tree-2", () => {

        const preorder = [1, 5, 9, 6, 3, 8];
        const inorder = [9, 5, 1, 3, 6, 8];

        const tree = buildTree(preorder, inorder);

        expect(tree.value).toEqual(1);
        expect(tree.left.value).toEqual(5);
        expect(tree.left.right).toBeNull();
        expect(tree.left.left.right).toBeNull();
        expect(tree.left.left.value).toEqual(9);
        expect(tree.right.value).toEqual(6);
        expect(tree.right.left.value).toEqual(3);
        expect(tree.right.left.left).toBeNull();
        expect(tree.right.left.right).toBeNull();
        expect(tree.right.right.value).toEqual(8);
        expect(tree.right.right.right).toBeNull();
        expect(tree.right.right.left).toBeNull();


    });
});