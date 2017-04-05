(() => {

    let sphere = new Objecto("sphere", "blue", false);
    let icosahedron = new Objecto("icosahedron", "yellow", false);
    let pyramid = new Objecto("pyramid", "red", false);
    let cube = new Objecto("cube", "green", false);


    let objectArray = [];
    objectArray.push(sphere);
    objectArray.push(pyramid);
    objectArray.push(cube);
    objectArray.push(icosahedron);
    let drawShape = new DrawShape();
    drawShape.setup(objectArray);

})();
