(() => {

    let Matrix = window.Matrix;
    let Objecto = window.Objecto;

    let roundness = 1;

    let leftArm = new Objecto("sphere", "lightPink", true, roundness);
    let leftArmMatrix = new Matrix();
    leftArmMatrix.translate(-0.1, 1.2, 0.1);
    leftArmMatrix.scale(0.2, 0.16, 0.1);
    leftArmMatrix.rotate(70, 1, 0, 0);
    leftArm.matrix = leftArmMatrix;
    leftArm.transformVertices(leftArmMatrix);

    let leftArmStroke = new Objecto("sphere", "pink", false, roundness);
    let leftArmStrokeMatrix = new Matrix();
    leftArmStrokeMatrix.translate(-0.1, 1.2, 0.1);
    leftArmStrokeMatrix.scale(0.2, 0.16, 0);
    leftArmStrokeMatrix.rotate(0, 0, 0, 0);
    leftArmStroke.matrix = leftArmStrokeMatrix;
    leftArmStroke.transformVertices(leftArmStrokeMatrix);

    let rightArm = new Objecto("sphere", "lightPink", true, roundness);
    let rightArmMatrix = new Matrix();
    rightArmMatrix.translate(0.75, 1.4, -0.1);
    rightArmMatrix.scale(0.2, 0.16, 0.1);
    rightArmMatrix.rotate(0, 0, 0, 0);
    rightArm.matrix = rightArmMatrix;
    rightArm.transformVertices(rightArmMatrix);

    let rightArmStroke = new Objecto("sphere", "pink", false, roundness);
    let rightArmStrokeMatrix = new Matrix();
    rightArmStrokeMatrix.translate(0.75, 1.4, -0.1);
    rightArmStrokeMatrix.scale(0.2, 0.16, 0.0);
    rightArmStrokeMatrix.rotate(0, 0, 0, 0);
    rightArmStroke.matrix = rightArmStrokeMatrix;
    rightArmStroke.transformVertices(rightArmStrokeMatrix);

    let leftFoot = new Objecto("sphere", "hotPink", true, roundness);
    let leftFootMatrix = new Matrix();
    leftFootMatrix.translate(0.2, 0.8, 0.1);
    leftFootMatrix.scale(0.13, 0.2, 0.0);
    leftFootMatrix.rotate(0, 0, 0, 0);
    leftFoot.matrix = leftFootMatrix;
    leftFoot.transformVertices(leftFootMatrix);

    let rightFoot = new Objecto("sphere", "hotPink", true, roundness);
    let rightFootMatrix = new Matrix();
    rightFootMatrix.translate(0.4, 0.8, 0);
    rightFootMatrix.scale(0.4, 0.13, 0.0);
    rightFootMatrix.rotate(0, 0, 0, 0);
    rightFoot.matrix = rightFootMatrix;
    rightFoot.transformVertices(rightFootMatrix);

    let leftEye = new Objecto("sphere", "blue", true, roundness);
    let leftEyeMatrix = new Matrix();
    leftEyeMatrix.translate(0.35, 1.3, 0.1);
    leftEyeMatrix.scale(0.05, 0.1, 0.1);
    leftEyeMatrix.rotate(0, 0, 0, 0);
    leftEye.matrix = leftEyeMatrix;
    leftEye.transformVertices(leftEyeMatrix);

    let leftEyeball = new Objecto("sphere", "white", true, roundness);
    let leftEyeballMatrix = new Matrix();
    leftEyeballMatrix.translate(0.355, 1.349, 0.2);
    leftEyeballMatrix.scale(0.025, 0.05, 0.1);
    leftEyeballMatrix.rotate(0, 0, 0, 0);
    leftEyeball.matrix = leftEyeballMatrix;
    leftEyeball.transformVertices(leftEyeballMatrix);

    let rightEye = new Objecto("sphere", "blue", true, roundness);
    let rightEyeMatrix = new Matrix();
    rightEyeMatrix.translate(0.6, 1.3, 0.1);
    rightEyeMatrix.scale(0.05, 0.1, 0.1);
    rightEyeMatrix.rotate(0, 0, 0, 0);
    rightEye.matrix = rightEyeMatrix;
    rightEye.transformVertices(rightEyeMatrix);

    let rightEyeball = new Objecto("sphere", "white", true, roundness);
    let rightEyeballMatrix = new Matrix();
    rightEyeballMatrix.translate(0.605, 1.349, 0.2);
    rightEyeballMatrix.scale(0.025, 0.05, 0.1);
    rightEyeballMatrix.rotate(0, 0, 0, 0);
    rightEyeball.matrix = rightEyeballMatrix;
    rightEyeball.transformVertices(rightEyeballMatrix);

    let mouth = new Objecto("pyramid", "hotPink", true);
    let mouthMatrix = new Matrix();
    mouthMatrix.translate(0.5, 1.12, 0);
    mouthMatrix.scale(0.15, 0.1, 1);
    mouthMatrix.rotate(180, 1, 0, 0);
    mouth.matrix = mouthMatrix;
    mouth.transformVertices(mouthMatrix);

    let body = new Objecto("sphere", "lightPink", true, roundness);
    let bodyMatrix = new Matrix();
    bodyMatrix.translate(0.3, 1.2, 0);
    bodyMatrix.scale(0.5, 0.5, 0);
    bodyMatrix.rotate(0, 0, 0, 0);
    body.matrix = bodyMatrix;
    body.transformVertices(bodyMatrix);

    leftEye.child.push(leftEyeball);
    rightEye.child.push(rightEyeball);
    leftArm.child.push(leftArmStroke);
    rightArm.child.push(rightArmStroke);
    body.child.push(leftArm);
    body.child.push(rightArm);
    body.child.push(leftFoot);
    body.child.push(rightFoot);
    body.child.push(leftEye);
    body.child.push(rightEye);
    body.child.push(mouth);

    let newBodyMatrix = new Matrix();
    newBodyMatrix.scale(1.7, 1.7, 1.7);
    newBodyMatrix.rotate(0, 0, 0, 0);
    newBodyMatrix.translate(-1.8, -1.5, 0);
    body.transformVertices(newBodyMatrix);

    let objectArray = [];
    objectArray.push(body);
    objectArray.push(leftArm);
    objectArray.push(leftArmStroke);
    objectArray.push(rightArm);
    objectArray.push(rightArmStroke);
    objectArray.push(leftFoot);
    objectArray.push(rightFoot);
    objectArray.push(leftEye);
    objectArray.push(leftEyeball);
    objectArray.push(rightEye);
    objectArray.push(rightEyeball);
    objectArray.push(mouth);

    let drawShape = new window.DrawShape();
    drawShape.setup(objectArray);

    let applyGravity = [];
    applyGravity.push(body);

    let gravity = 0.005;
    let ground = 1;
    while(gravity < 100){
        for(let i = 0; i < applyGravity.length; i++){
            let shape = applyGravity[i];
            let shapeY = shape.matrix.matrixArray[1][3];
            if( shapeY > ground ){
                let gravityMatrix = new Matrix();
                gravityMatrix.translate(0, -1 * gravity, 0);
                gravityMatrix.scale(1, 1, 1);
                gravityMatrix.rotate(0, 0, 0, 0);
                shape.matrix.matrixArray = gravityMatrix.multiply(shape.matrix);
                shape.transformVertices(gravityMatrix);
            }
        }
        drawShape = new window.DrawShape();
        drawShape.setup(objectArray);
        gravity = gravity * 2;
    }

})();
