(() => {

    let Matrix = window.Matrix;
    let Objecto = window.Objecto;
    let pyramid = new Objecto("pyramid", "yellow", true);
    let pyramid2 = new Objecto("pyramid", "grey", false);
    let pyramid3 = new Objecto("pyramid", "cyan", true);
    let cube = new Objecto("cube", "red", false);

    let pyramidMatrix2 = new Matrix();
    pyramidMatrix2.translate(-0.4, 0.4, 9);
    pyramidMatrix2.scale(0.5, 0.5, 0.5);
    pyramidMatrix2.rotate(290, 1, 0, 0);
    pyramid2.transformVertices(pyramidMatrix2);

    let pyramidMatrix3 = new Matrix();
    pyramidMatrix3.translate(-0.4, 0.4, -30);
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
    cubeMatrix.translate(-1, 1.2, -0.1);
    cubeMatrix.scale(0.5, 0.5, 1.2);
    cubeMatrix.rotate(30, 1, 1, 0);
    cube.matrix = cubeMatrix;
    cube.transformVertices(cubeMatrix);

    let leftArm = new Objecto("sphere", "lightPink", true, 3);
    let leftArmMatrix = new Matrix();
    leftArmMatrix.translate(-0.05, 1.2, 0.1);
    leftArmMatrix.scale(0.2, 0.16, 0.1);
    leftArmMatrix.rotate(0, 0, 0, 0);
    leftArm.matrix = leftArmMatrix;
    leftArm.transformVertices(leftArmMatrix);

    let leftArmStroke = new Objecto("sphere", "pink", false, 3);
    let leftArmStrokeMatrix = new Matrix();
    leftArmStrokeMatrix.translate(-0.05, 1.2, 0);
    leftArmStrokeMatrix.scale(0.2, 0.16, 0.0);
    leftArmStrokeMatrix.rotate(0, 0, 0, 0);
    leftArmStroke.matrix = leftArmStrokeMatrix;
    leftArmStroke.transformVertices(leftArmStrokeMatrix);

    let leftFoot = new Objecto("sphere", "hotPink", true, 3);
    let leftFootMatrix = new Matrix();
    leftFootMatrix.translate(0.4, 0.8, -0.1);
    leftFootMatrix.scale(0.4, 0.13, 0.0);
    leftFootMatrix.rotate(0, 0, 0, 0);
    leftFoot.matrix = leftFootMatrix;
    leftFoot.transformVertices(leftFootMatrix);

    let body = new Objecto("sphere", "lightPink", true, 3);
    let bodyMatrix = new Matrix();
    bodyMatrix.translate(0.3, 1.2, -0.1);
    bodyMatrix.scale(0.5, 0.5, 0);
    bodyMatrix.rotate(0, 0, 0, 0);
    body.matrix = bodyMatrix;
    body.transformVertices(bodyMatrix);

    let objectArray = [];
    objectArray.push(pyramid);
    objectArray.push(cube);
    objectArray.push(pyramid2);
    objectArray.push(pyramid3);

    objectArray.push(body);
    objectArray.push(leftArm);
    objectArray.push(leftArmStroke);
    objectArray.push(leftFoot);
    let drawShape = new window.DrawShape();
    drawShape.setup(objectArray);

})();
