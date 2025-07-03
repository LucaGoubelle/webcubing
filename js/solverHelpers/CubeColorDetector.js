
class CubeColorDetector {

    detectColorOnFace(face, color){
        let size = face.length;
        let result = this._genEmptyMatrix(size);
        for(let i=0; i<size ; i++)
            for(let j=0; j<size; j++)
                result[i][j] = (face[i][j] == color) ? 1 : 0;
        return result;
    }

    detectColorOnEdge(edge, colors){
        let results = edge.split("_");
        let cond1 = results.includes(colors[0]);
        let cond2 = results.includes(colors[1]);
        return cond1 && cond2;
    }

    detectColorOnCorner(corner, colors){
        let results = corner.split("_");
        let cond1 = results.includes(colors[0]);
        let cond2 = results.includes(colors[1]);
        let cond3 = results.includes(colors[2]);
        return cond1 && cond2 && cond3;
    }

    _genEmptyMatrix(size){
        let mtx = [];
        for(let i=0;i<size;i++){
            let row = [];
            for(j=0;j<size;j++)
                row.push(0);
            mtx.push(row);
        }
        return mtx;
    }
}
