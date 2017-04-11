describe("Object implementation", () => {
    let MeshLibrary = window.MeshLibrary;

    describe("creation and data access", () => {
        it("should create a Object with given properties", () => {
            let sphere = new Object("sphere", "red", true, 3);
            expect(sphere.refine).toBe(3);
            expect(sphere.fill).toBe(true);
            expect(sphere.shape).toBe(MeshLibrary.sphere(3));
            expect(sphere.color).toBe({ r: 10.0, g: 0.0, b: 0.0 });
            expect(sphere.vertices).toBe(sphere.shape.toRawTriangleArray(sphere.shape));

            let icosahedron = new Object("icosahedron", "orange", false);
            expect(icosahedron.refine).toBe(1);
            expect(icosahedron.fill).toBe(false);
            expect(icosahedron.shape).toBe(MeshLibrary.icosahedron);
            expect(icosahedron.color).toBe({ r: 1.0, g: 1.0, b: 1.0 });
            expect(icosahedron.vertices).toBe(icosahedron.shape.toRawTriangleArray(icosahedron.shape))
        });

        it("should have matrix", () => {
            let cube = new Object("cube", "green", false);
            let cubeMatrix = new Matrix();
            cubeMatrix.translate(1, 0.1, 0);
            cubeMatrix.scale(0.5, 0.5, 0.5);
            cubeMatrix.rotate(30, 1, 1, 0);
            cube.matrix = cubeMatrix;
            expect(cube.matrix).toBe(cubeMatrix);
        });

        it("should be able to group with other Objects", () => {
            let pyramid1 = new Objecto("pyramid", "blue", true);
            let pyramid2 = new Objecto("pyramid", "yellow", false);
            expect(pyramid1.child.length).toBe(0);
            pyramid1.child.push(pyramid2);
            expect(pyramid1.child.length).toBe(1);
            expect(pyramid1.child[0]).toBe(pyramid2);
        });
    });

    describe("update vertices after transform", () => {
        it("should update old vertices using transform matrix", () => {
            let icosahedron = new Objecto("icosahedron", "")

            expect(vresult.dimensions).toBe(2);
            expect(vresult.x).toBe(-6);
            expect(vresult.y).toBe(9);
        });
    });
});
