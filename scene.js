(() => {

    let sphere = new Objecto("sphere", "blue", false);
    let icosahedron = new Objecto("icosahedron", "yellow", false);
    let pyramid = new Objecto("pyramid", "red", false);
    let cube = new Objecto("cube", "green", false);

    let matrixArray = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]
    
    let matrix1 = new Matrix(matrixArray);


    let objectArray = [];
    objectArray.push(sphere);
    objectArray.push(pyramid);
    objectArray.push(cube);
    objectArray.push(icosahedron);
    let drawShape = new DrawShape();
    drawShape.setup(objectArray);

})();
