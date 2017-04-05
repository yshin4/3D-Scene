class DrawShape {

    constructor(){
        this.canvas = document.getElementById("scene");
    }

    getRotationMatrix (angle, x, y, z) {
        // In production code, this function should be associated
        // with a matrix object with associated functions.
        let axisLength = Math.sqrt((x * x) + (y * y) + (z * z));
        let s = Math.sin(angle * Math.PI / 180.0);
        let c = Math.cos(angle * Math.PI / 180.0);
        let oneMinusC = 1.0 - c;

        // Normalize the axis vector of rotation.
        x /= axisLength;
        y /= axisLength;
        z /= axisLength;

        // Now we can calculate the other terms.
        // "2" for "squared."
        let x2 = x * x;
        let y2 = y * y;
        let z2 = z * z;
        let xy = x * y;
        let yz = y * z;
        let xz = x * z;
        let xs = x * s;
        let ys = y * s;
        let zs = z * s;

        // GL expects its matrices in column major order.
        return [
            (x2 * oneMinusC) + c,
            (xy * oneMinusC) + zs,
            (xz * oneMinusC) - ys,
            0.0,

            (xy * oneMinusC) - zs,
            (y2 * oneMinusC) + c,
            (yz * oneMinusC) + xs,
            0.0,

            (xz * oneMinusC) + ys,
            (yz * oneMinusC) - xs,
            (z2 * oneMinusC) + c,
            0.0,

            0.0,
            0.0,
            0.0,
            1.0
        ];
    };

    setup(objectArray) {
        let gl = GLSLUtilities.getGL(this.canvas);
        if (!gl) {
            alert("No WebGL context found...sorry.");

            // No WebGL, no use going on...
            return;
        }

        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.viewport(0, 0, this.canvas.width, this.canvas.height);

        objectArray.forEach((objectToDraw) => {
            objectToDraw.buffer = GLSLUtilities.initVertexBuffer(gl, objectToDraw.vertices);

            if (!objectToDraw.colors) {
                // If we have a single color, we expand that into an array
                // of the same color over and over.
                objectToDraw.colors = [];
                for (let i = 0, maxi = objectToDraw.vertices.length / 3; i < maxi; i += 1) {
                    objectToDraw.colors = objectToDraw.colors.concat(
                        objectToDraw.color.r,
                        objectToDraw.color.g,
                        objectToDraw.color.b
                    );
                }
            }

            objectToDraw.colorBuffer = GLSLUtilities.initVertexBuffer(gl, objectToDraw.colors);
        });

        let abort = false;
        let shaderProgram = GLSLUtilities.initSimpleShaderProgram(
            gl,
            $("#vertex-shader").text(),
            $("#fragment-shader").text(),

            // Very cursory error-checking here...
            (shader) => {
                abort = true;
                alert("Shader problem: " + gl.getShaderInfoLog(shader));
            },

            // Another simplistic error check: we don't even access the faulty
            // shader program.
            (shaderProgram) => {
                abort = true;
                alert("Could not link shaders...sorry.");
            }
        );

        // If the abort variable is true here, we can't continue.
        if (abort) {
            alert("Fatal errors encountered; we cannot continue.");
            return;
        }

        // All done --- tell WebGL to use the shader program from now on.
        gl.useProgram(shaderProgram);

        // Hold on to the important variables within the shaders.
        let vertexPosition = gl.getAttribLocation(shaderProgram, "vertexPosition");
        gl.enableVertexAttribArray(vertexPosition);
        let vertexColor = gl.getAttribLocation(shaderProgram, "vertexColor");
        gl.enableVertexAttribArray(vertexColor);
        let rotationMatrix = gl.getUniformLocation(shaderProgram, "rotationMatrix");

        let drawObject = (object) => {
            // Set the varying colors.
            gl.bindBuffer(gl.ARRAY_BUFFER, object.colorBuffer);
            gl.vertexAttribPointer(vertexColor, 3, gl.FLOAT, false, 0, 0);

            // Set the varying vertex coordinates.
            gl.bindBuffer(gl.ARRAY_BUFFER, object.buffer);
            gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 0, 0);
            gl.drawArrays(object.mode, 0, object.vertices.length / 3);
        };

        let drawScene = () => {
            // Clear the display.
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            // Set up the rotation matrix.
            gl.uniformMatrix4fv(rotationMatrix, gl.FALSE, new Float32Array(this.getRotationMatrix(currentRotation, 1, 1, 1)));

            // Display the objects.
            objectArray.forEach(drawObject);

            // All done.
            gl.flush();
        };

        let animationActive = false;
        let currentRotation = 0.0;
        let previousTimestamp = null;

        const FRAMES_PER_SECOND = 60;
        const MILLISECONDS_PER_FRAME = 1000 / FRAMES_PER_SECOND;

        const DEGREES_PER_MILLISECOND = 0.033;
        const FULL_CIRCLE = 360.0;

        let advanceScene = (timestamp) => {
            // Check if the user has turned things off.
            if (!animationActive) {
                return;
            }

            // Initialize the timestamp.
            if (!previousTimestamp) {
                previousTimestamp = timestamp;
                window.requestAnimationFrame(advanceScene);
                return;
            }

            // Check if it's time to advance.
            var progress = timestamp - previousTimestamp;
            if (progress < MILLISECONDS_PER_FRAME) {
                // Do nothing if it's too soon.
                window.requestAnimationFrame(advanceScene);
                return;
            }

            // All clear.
            currentRotation += DEGREES_PER_MILLISECOND * progress;
            drawScene();
            if (currentRotation >= FULL_CIRCLE) {
                currentRotation -= FULL_CIRCLE;
            }

            // Request the next frame.
            previousTimestamp = timestamp;
            window.requestAnimationFrame(advanceScene);
        };

        // Draw the initial scene.
        drawScene();

        // Set up the rotation toggle: clicking on the canvas does it.
        $(this.canvas).click(() => {
            animationActive = !animationActive;
            if (animationActive) {
                previousTimestamp = null;
                window.requestAnimationFrame(advanceScene);
            }
        });
    };

}
