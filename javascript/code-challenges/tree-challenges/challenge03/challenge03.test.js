// Write your test here

const sortedArrayToBST = require("./challenge03");


describe("Testing Binary Search Tree", () => {



    it("test if the input is empty array", () => {
        const tree = sortedArrayToBST([]);

        expect(tree).toBeNull();
    });

    test("test if the input is sorted array-1", () => {
        const tree = sortedArrayToBST([-10, -3, 0, 5, 9]);

        expect(tree.root).toBe(0);

        expect(tree.left.root).toBe(-10);
        expect(tree.right.root).toBe(5)
        expect(tree.right.left).toBeNull();
        expect(tree.left.right.root).toBe(-3);
        expect(tree.left.right.left).toBeNull();
        expect(tree.right.right.root).toBe(9);
    });

    test("test if the input is sorted array-2", () => {
        const tree = sortedArrayToBST([3, 1]);

        expect(tree.root).toBe(3);
        expect(tree.right.root).toBe(1);
    });
});