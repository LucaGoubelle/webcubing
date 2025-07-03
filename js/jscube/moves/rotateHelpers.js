// ------------- ------------ -------------------
// ------------- rotate utils -------------------
// ------------- ------------ -------------------

function genEmptyFace(size){
    let face = [];
    for(let i=0;i<size;i++){
        let row = [];
        for(let j=0;j<size;j++) row.push("");
        face.push(row);
    }
    return face;
}

function rotate(face){
    let size = face.length;
    let newFace = genEmptyFace(size);
    for(let i=0;i<size; i++){
        let cnt = size-1;
        for(let j=0;j<size; j++){
            newFace[i][j] = face[cnt][i];
            cnt--;
        }
    }
    return newFace;
}

function rotateAsync(face){
    let size = face.length;
    let newFace = genEmptyFace(size);
    let cnt = size-1;
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++) newFace[i][j] = face[j][cnt];
        cnt--;
    }
    return newFace;
}

function rotateTwice(face){
    let newFace = rotate(face);
    return rotate(newFace);
}

function transfert(face, newFace){
    for(let i=0;i<face.length;i++)
        for(let j=0;j<face.length;j++)
            face[i][j] = (newFace[i][j]!="") ? newFace[i][j] : face[i][j];
    return face;
}
