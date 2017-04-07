class Matrix {
    constructor (matrixArray){
        this.matrixArray = matrixArray;
    }

    print(){
        let m1 = this.matrixArray;
        for (let m of m1){
            console.log(m);
        }
    }

    multiply(m2){
        let m1 = this.matrixArray;
        let m3 = [];
        for (let i = 0; i < 4; i++){
            m3[i] = [];
            for (let j = 0; j < 4; j++){
                m3[i][j] = m1[i][0] * m2.matrixArray[0][j] +
                           m1[i][1] * m2.matrixArray[1][j] +
                           m1[i][2] * m2.matrixArray[2][j] +
                           m1[i][3] * m2.matrixArray[3][j];
            }
        }
        return m3;
    }
}
