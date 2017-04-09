describe("Matrix implementation", () => {
    let matrix = new Matrix();

    describe("initialization", () => {
        it("should initialize with identity matrix", () => {
            expect(matrix.matrixArray).toBe([
                [ 1, 0, 0, 0 ],
                [ 0, 1, 0, 0 ],
                [ 0, 0, 1, 0 ],
                [ 0, 0, 0, 1 ]
            ]);
        });

        it("should initialize with given matrix", () => {
          let m1 = new Matrix([
                [5, 2, 6, 1],
                [0, 6, 2, 0],
                [3, 8, 1, 4],
                [1, 8, 5, 6]
            ]);

            expect(m1.matrixArray).toBe([
                [5, 2, 6, 1],
                [0, 6, 2, 0],
                [3, 8, 1, 4],
                [1, 8, 5, 6]
            ]);
        });
    });

    describe("multiplication", () => {
        it("should perform translate multiplication", () => {
            let translateMatrix = new Matrix();
            translateMatrix.translate(1, 0.4, 0.5);
            expect(translateMatrix.matrixArray).toBe([
                [1, 0, 0, 1],
                [0, 1, 0, 0.4],
                [0, 0, 1, 0.5],
                [0, 0, 0, 1]
            ]);
        });

        it("should perform scale multiplication", () => {
            let scaleMatrix = new Matrix();
            scaleMatrix.scale(0.5, 0.5, 0.5);
            expect(scaleMatrix.matrixArray).toBe([
                [0.5, 0, 0, 0],
                [0, 0.5, 0, 0],
                [0, 0, 0.5, 0],
                [0, 0, 0, 1]
            ]);
        });

        it("should perform rotate multiplication", () => {
            let rotateMatrix = new Matrix();
            rotateMatrix.rotate(30, 1, 1, 0);
            expect(rotateMatrix.matrixArray).toBe([
                [0.933, 0.066, -0.353, 0],
                [0.066, 0.933, 0.353, 0],
                [0.353, -0.353, 0.866],
                [0, 0, 0, 1]
            ]);
        });

        it("should perform T x S x R matrix multiplication", () => {
            let translateMatrix = new Matrix();
            translateMatrix.translate(0.3, 1.2, -0.1);
            expect(translateMatrix.matrixArray).toBe([
                [1, 0, 0, 0.3],
                [0, 1, 0, 1.2],
                [0, 0, 1, -0.1],
                [0, 0, 0, 1]
            ]);

            translateMatrix.scale(0.5, 0.3, 1.2);
            expect(translateMatrix.matrixArray).toBe([
                [0.5, 0, 0, 0.3],
                [0, 0.3, 0, 1.2],
                [0, 0, 1.2, -0.1],
                [0, 0, 0, 1]
            ]);

            translateMatrix.rotate(30, 1, 1, 0);
            expect(translateMatrix.matrixArray).toBe([
                [0.466, 0.033, -0.176, 0.3],
                [0.02, 0.279, 0.106, 1.2],
                [0.424, -0.424, 1.039, -0.1],
                [0, 0, 0, 1]
            ]);

        });

        let ma1 = [
            [5, 2, 6, 1],
            [0, 6, 2, 0],
            [3, 8, 1, 4],
            [1, 8, 5, 6]
        ];

        let ma2 = [
            [7, 5, 8, 0],
            [1, 8, 2, 6],
            [9, 4, 3, 8],
            [5, 3, 7, 9]
        ];

        let ma3 = [
            [7],
            [5],
            [8],
            [0]
        ];

        let m1 = new Matrix(ma1);
        let m2 = new Matrix(ma2);
        let m3 = new Matrix(ma3);

        it("should perform 4x4 times 4x4 multiplication", () => {
            expect(matrix.multiply(m1)).toBe([
                [5, 2, 6, 1],
                [0, 6, 2, 0],
                [3, 8, 1, 4],
                [1, 8, 5, 6]
            ]);

            expect(m2.multiply(m3)).toBe([
                [96, 68, 69, 69],
                [24, 56, 18, 52],
                [58, 95, 71, 92],
                [90, 107, 81, 142]
            ])
        });

        it("should perform 4x4 times 1x4 multiplication", () => {
            expect(m1.multiply(m3)).toBe([
                [93],
                [46],
                [69],
                [87]
            ]);
        });
    });

    describe("reconstructor matrix to be in single array", () => {
        it("should turn double array in to single array in column major order", () => {
            expect(matrix.getRawArray()).toBe([
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            ]);

            expect(m1.getRawArray()).toBe([
                [5, 2, 6, 1, 0, 6, 2, 0, 3, 8, 1, 4, 1, 8, 5, 6]
            ]);

            expect(m2.getRawArray()).toBe([
                [7, 5, 8, 0, 1, 8, 2, 6, 9, 4, 3, 8, 5, 3, 7, 9]
            ]);

            expect(m3.getRawArray()).toBe([
                [7, 5, 8, 0]
            ]);
        });
    });

});
