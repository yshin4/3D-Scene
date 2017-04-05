class Objecto {
    let shape;
    let color;
    let fill;
    let refine;
    let mesh;

    constructor (s, c, f, r){
        refine = r || 1;
        shape = getShape[s] || new Mesh (s.vertices, s.indices);
        color = getColor[c] || { r: 1.0, g: 1.0, b: 1.0 };
        fill = f;
    }

    let getShape = {
        sphere: MeshLibrary.sphere(refine);
        cube: MeshLibrary.cube();
        pyramid: MeshLibrary.pyramid();
        icosahedron: MeshLibrary.icosahedron();
        crystal: MeshLibrary.crystal(refine);
    }

    let getColor = {
        red: { r: 1.0, g: 0.0, b: 0.0 },
        blue: { r: 0.0, g: 0.0, b: 1.0 },
        green: { r: 0.0, g: 1.0, b: 0.0 },
        cyan: { r: 0.0, g: 0.7, b: 0.8 },
        purple: { r: 0.7, g: 0.0, b: 0.7 },
        black: { r: 1.0, g: 1.0, b: 1.0 },
        grey: { r: 0.8, g: 0.9, b: 0.9 }
    }

}
