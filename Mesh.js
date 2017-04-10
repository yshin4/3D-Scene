class Mesh {

    constructor(v, i) {
        this.vertices = v;
        this.indices = i;
    }

    toRawLineArray(indexedVertices) {
        let result = [];
        for (let i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
            for (let j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
                result = result.concat(
                    indexedVertices.vertices[
                        indexedVertices.indices[i][j]
                    ],

                    indexedVertices.vertices[
                        indexedVertices.indices[i][(j + 1) % maxj]
                    ]
                );
            }
        }

        return result;
    }

    toRawTriangleArray(indexedVertices) {
        let result = [];
        for (let i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
            for (let j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
                result = result.concat(
                    indexedVertices.vertices[
                        indexedVertices.indices[i][j]
                    ]
                );
            }
        }

        return result;
    }
}
