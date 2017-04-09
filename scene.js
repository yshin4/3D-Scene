(() => {

    let sphere = new Objecto("sphere", "blue", false);
    let icosahedron = new Objecto("icosahedron", "green", false);
    let pyramid = new Objecto("pyramid", "yellow", true);
    let pyramid2 = new Objecto("pyramid", "grey", false);
    let pyramid3 = new Objecto("pyramid", "cyan", true);
    let cube = new Objecto("cube", "red", false);

    let sphereMatrix = new Matrix();
    sphereMatrix.translate(0.3, 0.4, 0);
    sphereMatrix.scale(0.3, 0.3, 0.3);
    sphereMatrix.rotate(100, 0, 1, 0);
    sphere.matrix = sphereMatrix;
    sphere.transformVertices(sphereMatrix);

    let pyramidMatrix2 = new Matrix();
    pyramidMatrix2.translate(-0.4, 0.4, 0);
    pyramidMatrix2.scale(0.5, 0.5, 0.5);
    pyramidMatrix2.rotate(290, 1, 0, 0);
    pyramid2.transformVertices(pyramidMatrix2);

    let pyramidMatrix3 = new Matrix();
    pyramidMatrix3.translate(-0.4, 0.4, 0);
    pyramidMatrix3.scale(0.5, 0.5, 0.5);
    pyramidMatrix3.rotate(290, 1, 0, 0);
    pyramid3.transformVertices(pyramidMatrix3);

    let pyramidMatrix = new Matrix();
    pyramidMatrix.translate(0, 0, 0);
    pyramidMatrix.scale(1, 1, 1);
    pyramidMatrix.rotate(0, 0, 0, 0);
    pyramid.matrix = pyramidMatrix;
    pyramid.transformVertices(pyramidMatrix);

    cube.child.push(pyramid);

    let cubeMatrix = new Matrix();
    cubeMatrix.translate(0.3, 1.2, -0.1);
    cubeMatrix.scale(0.5, 0.5, 1.2);
    cubeMatrix.rotate(30, 1, 1, 0);
    cube.matrix = cubeMatrix;
    cube.transformVertices(cubeMatrix);

    let objectArray = [];
    objectArray.push(sphere);
    objectArray.push(pyramid);
    objectArray.push(cube);
    objectArray.push(pyramid2);
    objectArray.push(pyramid3);
    // objectArray.push(icosahedron);
    let drawShape = new DrawShape();
    drawShape.setup(objectArray);

})();
