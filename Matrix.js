class Matrix {
    constructor (matrixArray){
        this.matrixArray = matrixArray;
    }

    multiply(m2){
        let m1 = this.matrixArray;
        let m3 = [];
        for (let i = 0; i < 4; i++){
            for (let j = 0; j < 4; j++){
                m3[i][j] = m1[i][0] * m2[0][j] +
                           m1[i][1] * m2[1][j] +
                           m1[i][2] * m2[2][j] +
                           m1[i][3] * m2[3][j];
            }
        }
        return m3;
    }
}
