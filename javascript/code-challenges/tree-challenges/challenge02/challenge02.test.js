// Write your test here

const { isSame, Node } = require("./challenge02");


describe("Testing Breadth First Traversal", () => {


    it("test if two trees are null", ()=>{

        const a = new Node(null);
        const b = new Node(null);
        expect(isSame(a,b)).toBe(true);

    });

    test("test if the trees are the same", () => {

        const a = new Node(1);
        const b = new Node(2);
        const c = new Node(3);
        const d = new Node(4);
        const e = new Node(5);
        const f = new Node(6);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;

        const a2 = new Node(1);
        const b2 = new Node(2);
        const c2 = new Node(3);
        const d2 = new Node(4);
        const e2 = new Node(5);
        const f2 = new Node(6);

        a2.left = b2;
        a2.right = c2;
        b2.left = d2;
        b2.right = e2;
        c2.right = f2;

        expect(isSame(a,a2)).toBe(true);

    });


    it("test if two trees are not the same", ()=>{

        const a = new Node(1);
        const b = new Node(2);
        const c = new Node(3);
        const d = new Node(4);

        a.left = b;
        a.right = c;
        b.left = d;

        const a2 = new Node(1);
        const b2 = new Node(2);
        const c2 = new Node(3);
        const d2 = new Node(4);
        const e2 = new Node(5);
        const f2 = new Node(6);

        a2.left = b2;
        a2.right = c2;
        b2.left = d2;
        b2.right = e2;
        c2.right = f2;

        expect(isSame(a,a2)).toBe(false);
    });

});