
// ----------------------------------------------------------------
// ------------------------ KILOMINX ------------------------------
// ----------------------------------------------------------------

class KilominxRotateUtils extends MinxRotateUtils {

    genEmptyFace(size){
        let face = [];
        for(let i = 0; i < size; i++) 
            face.push("");
        return face;
    }
    
    rotate(face){ 
        return this.rotateArr(face, 1);
    }

    rotateAsync(face){ 
        return this.rotateArr(face, 4);
    }
    
    transfert(face, newFace){
        for(let i=0;i<face.length;i++) 
            face[i] = (newFace[i]!="") ? newFace[i] : face[i];
        return face;
    }
}



