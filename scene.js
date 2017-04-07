(() => {

    let sphere = new Objecto("sphere", "blue", false);
    let icosahedron = new Objecto("icosahedron", "yellow", false);
    let pyramid = new Objecto("pyramid", "red", false);
    let cube = new Objecto("cube", "green", false);

    let matrixArray = [
        [5, 2, 6, 1],
        [0, 6, 2, 0],
        [3, 8, 1, 4],
        [1, 8, 5, 6]
    ]

    let matrixArray2 = [
        [7, 5, 8, 0],
        [1, 8, 2, 6],
        [9, 4, 3, 8],
        [5, 3, 7, 9]
    ]

    let m1 = new Matrix(matrixArray);
    let m2 = new Matrix(matrixArray2);
    m1.print();
    let m3 = new Matrix(m1.multiply(m2));
    console.log("new ");
    m3.print();


    let objectArray = [];
    objectArray.push(sphere);
    objectArray.push(pyramid);
    objectArray.push(cube);
    objectArray.push(icosahedron);
    let drawShape = new DrawShape();
    drawShape.setup(objectArray);

})();
