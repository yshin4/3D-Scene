class Matrix {
    constructor (matrixArray){
        let identityMatrix = [
            [ 1, 0, 0, 0 ],
            [ 0, 1, 0, 0 ],
            [ 0, 0, 1, 0 ],
            [ 0, 0, 0, 1 ]
        ];

        this.matrixArray = matrixArray || identityMatrix;
    }

    print(){
        let m1 = this.matrixArray;
        for (let m of m1){
            console.log(m);
        }
    }

    multiply(m2){
        let m1 = this.matrixArray;
        m2 = m2.matrixArray;
        let m3 = [];
        for (let i = 0; i < m1[0].length; i++){
            m3[i] = [];
            for (let j = 0; j < m2[0].length; j++){
                m3[i][j] = m1[i][0] * m2[0][j] +
                           m1[i][1] * m2[1][j] +
                           m1[i][2] * m2[2][j] +
                           m1[i][3] * m2[3][j];
            }
        }
        return m3;
    }
}
