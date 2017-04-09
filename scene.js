(() => {

    let sphere = new Objecto("sphere", "blue", false);
    let icosahedron = new Objecto("icosahedron", "yellow", false);
    let pyramid = new Objecto("pyramid", "red", false);
    let cube = new Objecto("cube", "green", false);

    let cubeMatrix = new Matrix();
    cubeMatrix.translate(3, 0, 0);
    cubeMatrix.scale(1, 1, 1);
    cubeMatrix.rotate(0, 0, 0, 0);
    console.log(cube.shape.vertices);
    cube.transformVertices(cubeMatrix);
    console.log(cube.shape.vertices);


    // let matrixArray = [
    //     [5, 2, 6, 1],
    //     [0, 6, 2, 0],
    //     [3, 8, 1, 4],
    //     [1, 8, 5, 6]
    // ];
    //
    // let matrixArray2 = [
    //     [7],
    //     [5],
    //     [8],
    //     [0]
    // ];
    //
    // let matrixArray3 = [
    //     [7, 5, 8, 0],
    //     [1, 8, 2, 6],
    //     [9, 4, 3, 8],
    //     [5, 3, 7, 9]
    // ];
    //
    // let m = new Matrix();
    // let m1 = new Matrix(matrixArray);
    // let m2 = new Matrix(matrixArray2);
    // let m3 = new Matrix(matrixArray3);
    // let m4 = new Matrix(m1.multiply(m2));
    // let m5 = new Matrix(m1.multiply(m3));

    let objectArray = [];
    //objectArray.push(sphere);
    // objectArray.push(pyramid);
     objectArray.push(cube);
    // objectArray.push(icosahedron);
    let drawShape = new DrawShape();
    drawShape.setup(objectArray);

})();