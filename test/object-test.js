describe("Object implementation", () => {
    let MeshLibrary = window.MeshLibrary;

    beforeEach(() => {
        let fixture =
          '<div id="fixture">' +
              '<canvas id="scene" width="512" height="512"></canvas>' +
          '></div>';

    document.body.insertAdjacentHTML(
        'afterbegin',
         fixture);
    });

    // remove the html fixture from the DOM
    afterEach(() => {
        document.body.removeChild(document.getElementById('fixture'));
    });

    describe("creation and data access", () => {
        it("should create a Object with given properties", () => {
            let sphere = new Objecto("sphere", "red", true, 3);
            expect(sphere.refine).toBe(3);
            expect(sphere.fill).toBe(true);
            let answer = MeshLibrary.sphere(3);
            for (let i = 0; i < answer.vertices.length; i++){
                for(let j = 0; j < answer.vertices[0].length; j++){
                  expect(sphere.shape.vertices[i][j]).toBe(answer.vertices[i][j]);
                }
            }
            for (let i = 0; i < answer.indices.length; i++){
                for(let j = 0; j < answer.indices[0].length; j++){
                  expect(sphere.shape.indices[i][j]).toBe(answer.indices[i][j]);
                }
            }
            expect(sphere.color.r).toBe(10);
            expect(sphere.color.g).toBe(0);
            expect(sphere.color.b).toBe(0);
            let icosahedron = new Objecto("icosahedron", "orange", false);
            expect(icosahedron.refine).toBe(1);
            expect(icosahedron.fill).toBe(false);
            let answer2 = MeshLibrary.icosahedron();
            for (let i = 0; i < answer2.vertices.length; i++){
                for(let j = 0; j < answer2.vertices[0].length; j++){
                  expect(icosahedron.shape.vertices[i][j]).toBe(answer2.vertices[i][j]);
                }
            }
            for (let i = 0; i < answer2.indices.length; i++){
                for(let j = 0; j < answer2.indices[0].length; j++){
                  expect(icosahedron.shape.indices[i][j]).toBe(answer2.indices[i][j]);
                }
            }
            expect(icosahedron.color.r).toBe(1);
            expect(icosahedron.color.g).toBe(1);
            expect(icosahedron.color.b).toBe(1);
        });

        it("should have matrix", () => {
            let cube = new Objecto("cube", "green", false);
            let cubeMatrix = new Matrix();
            cubeMatrix.translate(1, 0.1, 0);
            cubeMatrix.scale(0.5, 0.5, 0.5);
            cubeMatrix.rotate(30, 1, 1, 0);
            cube.matrix = cubeMatrix;
            for (let i = 0; i < cubeMatrix.length; i++){
                for(let j = 0; j < cubeMatrix[0].length; j++){
                  expect(cube.matrix[i][j]).toBe(cubeMatrix[i][j]);
                }
            }
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
});
