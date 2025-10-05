// ------------- ------------ -------------------
// ------------- rotate utils -------------------
// ------------- ------------ -------------------

class RotateHelpers {
    
    genEmptyFace(size){
        let face = [];
        for(let i=0;i<size;i++){
            let row = [];
            for(let j=0;j<size;j++) 
                row.push("");
            face.push(row);
        }
        return face;
    }

    rotate(face){
        let size = face.length;
        let newFace = this.genEmptyFace(size);
        for(let i=0;i<size; i++){
            let cnt = size-1;
            for(let j=0;j<size; j++){
                newFace[i][j] = face[cnt][i];
                cnt--;
            }
        }
        return newFace;
    }

    rotateAsync(face){
        let size = face.length;
        let newFace = this.genEmptyFace(size);
        let cnt = size-1;
        for(let i=0;i<size;i++){
            for(let j=0;j<size;j++) newFace[i][j] = face[j][cnt];
            cnt--;
        }
        return newFace;
    }

    rotateTwice(face){
        let newFace = this.rotate(face);
        return this.rotate(newFace);
    }

    transfert(face, newFace){
        for(let i=0;i<face.length;i++)
            for(let j=0;j<face.length;j++)
                face[i][j] = (newFace[i][j]!="") ? newFace[i][j] : face[i][j];
        return face;
    }
}
